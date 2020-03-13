import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetsListComponent } from '../_Shared/GenericAssetsListComponent';
import { Asset } from "@/models/asset";
import { AssetService } from "@/services/asset.service";
import { debug } from 'util';

@Component({
  selector: 'app-all',
  templateUrl: `./all.component.html`,
  styleUrls: ['./all.component.css']
})
export class AllComponent extends GenericAssetsListComponent  {
  constructor(service: AssetService) {
    super(service)
    console.log("START")
  }

  GetAssets() {
    this.Service.createAsset(new Asset())
    console.log("GET ALL")
    this.Service.getAssets().subscribe(data => {
      this.AllAssets = data.filter(asset => !asset.retired) // TODO: Is this right?
    })
  }
}

