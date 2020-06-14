import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetService } from '@/services/asset.service';
import { Location } from '@angular/common';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-details',
  templateUrl: `./details.component.html`,
  styleUrls: ['../_Shared/css/button.component.css']
})
export class DetailsComponent extends GenericAssetDetailComponent  {
  location: Location
  constructor(
    route: ActivatedRoute,
    service: AssetService,
    location: Location,
    logger: NGXLogger
  ) {
    super(parseInt(route.snapshot.paramMap.get('id')), service, logger)
    this.location = location
    this.Logger.info(`Loading Asset ${this.id} Details Page...`)
  }



  NavigateBack() {
    this.location.back();
  }
}

