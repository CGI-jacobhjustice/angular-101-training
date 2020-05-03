import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetService } from '@/services/asset.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: `./details.component.html`,
  styleUrls: ['../_Shared/css/button.component.css']
})
export class DetailsComponent extends GenericAssetDetailComponent  {
  route: ActivatedRoute
  location: Location
  constructor(
    route: ActivatedRoute,
    service: AssetService,
    location: Location
  ) {
    super(service)
    this.route = route;
    this.location = location
  }

  ngOnInit() {
    var id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.GetAsset(id, undefined)
  }

  NavigateBack() {
    console.log("@");
    this.location.back();
  }
}

