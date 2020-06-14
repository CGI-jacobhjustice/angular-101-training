import { Component, Input, OnInit } from '@angular/core';
import {Location } from "@angular/common"
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from '@/services/asset.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-retire',
  templateUrl: `./retire.component.html`,
  styleUrls: ['../_Shared/css/button.component.css']
})
export class RetireComponent extends GenericAssetDetailComponent  {
  location: Location
  constructor(
    route: ActivatedRoute,
    service: AssetService,
    location: Location,
    logger: NGXLogger
  ) {
    super(parseInt(route.snapshot.paramMap.get('id')), service, logger)
    this.location = location;
    this.Logger.info(`Loading Retire Asset ${this.id} Page...`)

  }

  RetireAsset() {
    // TODO: Fix to subscribe to service
    this.Service.retireAsset(this.CurrentAsset, this.location).subscribe(() => {this.location.back()});
  } 
}

