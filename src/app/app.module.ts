import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
// used to create fake backend
import { mockBackendProvider } from './helpers/mock-backend';
import { AppComponent } from './app.component';
import { AssetService } from './services/asset.service';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { RetireComponent } from './features/Retire/retire.component';
import { AllComponent } from './features/All/all.component';
import { EmployeeComponent } from './features/Employee/employee.component';
import { UpdateComponent } from './features/Update/update.component';
import { CreateComponent } from './features/Create/create.component';
import { DetailsComponent } from './features/Details/details.component';
import { AssetComponent } from './features/_Shared/Asset/asset.component';

import { YesNoPipe } from './features/_Shared/Pipes/yesno.pipe';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';



@NgModule({
  declarations: [ AppComponent, RetireComponent, AllComponent, EmployeeComponent, UpdateComponent, CreateComponent, DetailsComponent, YesNoPipe, AssetComponent],
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  bootstrap:    [ AppComponent ],
  providers: [AssetService, mockBackendProvider, {provide: LocationStrategy, useClass: HashLocationStrategy}]//{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
