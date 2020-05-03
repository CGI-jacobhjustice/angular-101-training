import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '@/models/asset';

@Component({
  selector: 'app-asset-form',
  templateUrl: `./assetform.component.html`,
  styleUrls: ['../css/button.component.css']
})
export class AssetForm   {
  @Input('asset') CurrentAsset:Asset
}

