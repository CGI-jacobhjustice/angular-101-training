import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetService } from '@/services/asset.service';

@Component({
  selector: 'app-details',
  templateUrl: `./details.component.html`,
  styleUrls: ['../_Shared/css/button.component.css']
})
export class DetailsComponent extends GenericAssetDetailComponent  {
  route: ActivatedRoute
  constructor(
    route: ActivatedRoute,
    service: AssetService
  ) {
    super(service)
    this.route = route;
  }

  ngOnInit() {
    var id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.GetAsset(id)
  }
}

