import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetsListComponent } from '../_Shared/GenericAssetsListComponent';
//import { Asset } from "./Asset";
import { AssetService } from "@/services/asset.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: `./employee.component.html`,
  styleUrls: ['../_Shared/css/button.component.css']

})
export class EmployeeComponent extends GenericAssetsListComponent  {
  employeeID: string
  constructor(
    route: ActivatedRoute,
    service: AssetService
  ) {
    super(service)
    this.employeeID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.GetAssets()
  }
  
  GetAssets() {
    this.Service.getAssets().subscribe(data => {
      this.AllAssets = data.filter(asset => !asset.retired && asset.assignedTo == this.employeeID) // TODO: Is this right?
    })
  }
}

