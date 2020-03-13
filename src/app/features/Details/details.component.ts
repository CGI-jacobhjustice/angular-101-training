import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetDetailComponent } from '../_Shared/GenericAssetDetailComponent';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetService } from '@/services/asset.service';

@Component({
  selector: 'app-details',
  templateUrl: `./details.component.html`,
})
export class DetailsComponent extends GenericAssetDetailComponent  {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AssetService
  ) {super(service)}

  ngOnInit() {
    var id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.GetAsset(id)
  }
}

