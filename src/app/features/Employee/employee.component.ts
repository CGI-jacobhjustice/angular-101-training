import { Component, Input, OnInit } from '@angular/core';
import { GenericAssetsListComponent } from '../_Shared/GenericAssetsListComponent';
//import { Asset } from "./Asset";
import { AssetService } from "@/services/asset.service";

@Component({
  selector: 'app-employee',
  templateUrl: `./employee.component.html`,
})
export class EmployeeComponent extends GenericAssetsListComponent  {
  GetAssets() {
    return [];
  }
}

