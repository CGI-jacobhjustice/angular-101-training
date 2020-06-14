import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import {FormBuilder, FormControl, Validators } from "@angular/forms"
import { AssetService } from '@/services/asset.service';
import { ActivatedRoute } from '@angular/router';
import { Asset } from '@/models/asset';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: `./edit.component.html`,
  
})
export class EditComponent extends GenericAssetDetailComponent  {
  form;

  constructor(
    private formBuilder: FormBuilder,
    service: AssetService,
    route: ActivatedRoute,
    private location: Location
  ){
    super(service)
    var id = parseInt(route.snapshot.paramMap.get('id'));
 
    if(id > 0) {
      this.CurrentAsset = null;
      this.GetAsset(id, () => {
        this.form = this.formBuilder.group(this.generateFormGroupProperties());
      });
    } else {
        this.CurrentAsset = new Asset();
        this.form = this.formBuilder.group(this.generateFormGroupProperties());
    }

    
    
  }

  private generateFormGroupProperties() {
    return {
      description: new FormControl(this.CurrentAsset.description, [Validators.required]),
      assigned: new FormControl(this.CurrentAsset.assignedTo),
      type: new FormControl(this.CurrentAsset.assetType, [Validators.required])
    }
  }

  IsEditMode() {
    return this.CurrentAsset? this.CurrentAsset.assetTagId > 0 : false;
  }

  onSubmit(assetData) {
    console.log(assetData);
    var asset = this.CurrentAsset;
    asset.assignedTo = assetData.assigned;
    asset.description = assetData.description;

    var location = this.location;
    if(this.IsEditMode()) {
      this.Service.editAsset(asset).subscribe(function(){
        location.back();
      });
    } else {
      asset.assetType = assetData.type;
      asset.dateAdded = new Date();
      asset.retired = false;

      this.Service.createAsset(asset).subscribe(function(){
        location.back();
      });
    }
  }
}

