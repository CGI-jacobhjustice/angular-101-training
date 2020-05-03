import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import {FormBuilder } from "@angular/forms"
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
      this.GetAsset(id);
    } else {
      this.CurrentAsset = new Asset();
    }

    this.form = this.formBuilder.group({
      type: this.CurrentAsset.assetType,
      description: this.CurrentAsset.description,
      assigned: this.CurrentAsset.assignedTo,
    });
    
  }

  onSubmit(assetData) {
    console.log(assetData);
    var asset = new Asset();
    asset.dateAdded = new Date();
    asset.assetType = assetData.type;
    asset.retired = false;
    asset.assignedTo = assetData.assigned;
    asset.description = assetData.description;

    var location = this.location;
    this.Service.createAsset(asset).subscribe(function(){
      location.back();
    });
  }
}

