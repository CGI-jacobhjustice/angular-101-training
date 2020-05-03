import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '@/models/asset';

@Component({
  selector: 'app-asset-table',
  templateUrl: `./assettable.component.html`,
  styleUrls: ['./assettable.component.css', '../css/button.component.css']
})
export class AssetTableComponent   {
  @Input('assets') CurrentAssets:Asset[]
}

