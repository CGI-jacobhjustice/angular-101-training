import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from '@/services/asset.service';

@Component({
  selector: 'app-retire',
  templateUrl: `./retire.component.html`,
  styleUrls: ['../_Shared/css/button.component.css']
})
export class RetireComponent extends GenericAssetDetailComponent  {
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

  RetireAsset() {
    this.Service.retireAsset(this.CurrentAsset)
  }
}

