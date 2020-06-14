import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import {FormBuilder, FormControl, Validators } from "@angular/forms"
import { AssetService } from '@/services/asset.service';
import { ActivatedRoute } from '@angular/router';
import { Asset } from '@/models/asset';
import { Location } from '@angular/common';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-create',
  templateUrl: `./edit.component.html`,
  styleUrls: ['../_Shared/css/button.component.css']
})
export class EditComponent extends GenericAssetDetailComponent  {
  form;

  constructor(
    private formBuilder: FormBuilder,
    service: AssetService,
    route: ActivatedRoute,
    private location: Location,
    logger: NGXLogger
  ){
    super(parseInt(route.snapshot.paramMap.get('id')), service, logger)
    this.Logger.info(this.IsEditMode() ? `Loading Edit Asset ${this.id} Page...` : `Loading Create Asset Page...`)

    if(this.id > 0) {
      this.CurrentAsset = null;
    } else {
        this.CurrentAsset = new Asset();
        this.form = this.formBuilder.group(this.generateFormGroupProperties());
    }
  }

  GetAssetCallback() {
    this.form = this.formBuilder.group(this.generateFormGroupProperties());
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
    var asset = this.CurrentAsset;
    asset.assignedTo = assetData.assigned;
    asset.description = assetData.description;

    var location = this.location;
    if(this.IsEditMode()) {
      this.Logger.info(`Preparing to update Asset ${this.id}.`)
      this.Service.editAsset(asset).subscribe(function(){
        this.Logger.info(`Successfully Updated Asset ${this.id}.`)
        location.back();
      });
    } else {
      asset.assetType = assetData.type;
      asset.dateAdded = new Date();
      asset.retired = false;
      this.Logger.info(`Preparing to Create Asset.`)
      this.Service.createAsset(asset).subscribe(function(data){
        this.Logger.info(`Successfully Created Asset ${data.assetTagId}.`)
        location.back();
      });
    }
  }

  NavigateBack() {
    this.location.back();
  }
}

