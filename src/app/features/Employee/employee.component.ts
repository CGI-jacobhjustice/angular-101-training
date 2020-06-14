import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetsListComponent } from '../_Shared/GenericAssetsListComponent';
//import { Asset } from "./Asset";
import { AssetService } from "@/services/asset.service";
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-employee',
  templateUrl: `./employee.component.html`,
  styleUrls: ['../_Shared/css/button.component.css']

})
export class EmployeeComponent extends GenericAssetsListComponent  {
  employeeID: string
  constructor(
    route: ActivatedRoute,
    service: AssetService,
    logger: NGXLogger
  ) {
    super(service, logger)
    this.employeeID = route.snapshot.paramMap.get('id');
    this.Logger.info(`Loading Employee ${this.employeeID}'s Assets Page...`)
  }


  
  GetAssets() {
    this.Logger.info(`Preparing to Retrieve Assets for Employee: ${this.employeeID}.`)
    this.Service.getAssets().subscribe(data => {

      this.AllAssets = data.filter(asset => !asset.retired && asset.assignedTo == this.employeeID) 
      this.Logger.info(`${this.AllAssets.length} Assets Retrieved.`)
    })
  }
}

