import { Component, Input, OnInit } from '@angular/core';
import { Asset } from '@/models/asset';
import {Sort} from '@angular/material/sort'

@Component({
  selector: 'app-asset-table',
  templateUrl: `./assettable.component.html`,
  styleUrls: ['./assettable.component.css', '../css/button.component.css']
})
export class AssetTableComponent   {
  @Input('assets') CurrentAssets:Asset[]
  Filter: string = "";

  sortData(sort: Sort) {
    const data = this.CurrentAssets;
    if (!sort.active || sort.direction === '') {
      this.CurrentAssets = data;
      return;
    }

    this.CurrentAssets = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      console.log(sort.active)
      console.log(a);
      console.log(b);
      switch (sort.active) {
        case 'id': return this.compare(a.assetTagId, b.assetTagId, isAsc);
        case 'type': return this.compare(a.assetType, b.assetType, isAsc);
        case 'description': return this.compare(a.description, b.description, isAsc);
        case 'assigned': return this.compare(a.assignedTo, b.assignedTo, isAsc);
        case 'added': return this.compare(a.dateAdded, b.dateAdded, isAsc);
        case 'retired': return this.compare(a.retired, b.retired, isAsc);
        case 'retiredDate': return this.compare(a.dateRetired, b.dateRetired, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string | Date | Boolean, b: number | string | Date | Boolean, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  IsAssetFilteredOut(asset: Asset) {
    if(this.Filter.length == 0) {
      return false;
    }
    var filter = this.Filter.toLocaleLowerCase()
    return (asset.assetTagId? asset.assetTagId.toString().indexOf(filter) == -1 : true)
      && (asset.assetType? asset.assetType.toString().indexOf(filter) == -1 : true)
      && (asset.description? asset.description.toString().indexOf(filter) == -1 : true)
      && (asset.assignedTo? asset.assignedTo.toString().indexOf(filter) == -1 : true)
      && (asset.dateAdded? asset.dateAdded.toLocaleDateString().indexOf(filter) == -1 : true)
      && (asset.retired? asset.retired.toString().indexOf(filter) == -1 : true)
      && (asset.dateRetired? asset.dateRetired.toLocaleDateString().indexOf(filter) == -1 : true)
  }
}

