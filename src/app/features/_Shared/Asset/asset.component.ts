import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '@/models/asset';

@Component({
  selector: 'app-asset',
  templateUrl: `./asset.component.html`,
})
export class AssetComponent   {
  @Input('asset') CurrentAsset:Asset//CurrentAsset:Asset
}

