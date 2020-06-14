import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetsListComponent } from '../_Shared/GenericAssetsListComponent';
import { AssetService } from "@/services/asset.service";
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-all',
  templateUrl: `./all.component.html`,

})
export class AllComponent extends GenericAssetsListComponent  {
  constructor(service: AssetService,  logger: NGXLogger) {
    super(service, logger);
    this.Logger.info(`Loading All Assets Page...`)
  }

  GetAssets() {
    this.Logger.info(`Preparing to Retrieve all Assets.`)
    this.Service.getAssets().subscribe(data => {
      this.AllAssets = data.filter(asset => !asset.retired) 
      this.Logger.info(`${this.AllAssets.length} Assets Retrieved.`)
    })
  }
}

