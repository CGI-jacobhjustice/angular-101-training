import { Component, Input, OnInit } from '@angular/core';
import {Location } from "@angular/common"
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from '@/services/asset.service';

@Component({
  selector: 'app-retire',
  templateUrl: `./retire.component.html`,
  styleUrls: ['../_Shared/css/button.component.css']
})
export class RetireComponent extends GenericAssetDetailComponent  {
  route: ActivatedRoute;
  location: Location
  constructor(
    route: ActivatedRoute,
    service: AssetService,
    location: Location
  ) {
    super(service)
    this.route = route;
    this.location = location;

  }

  ngOnInit() {
    var id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.GetAsset(id)
  }

  RetireAsset() {
    console.log(this.location)
    this.Service.retireAsset(this.CurrentAsset, this.location)
  }
}

