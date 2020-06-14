import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DetailsComponent } from './features/Details/details.component';
import { AssetComponent } from './features/_Shared/Asset/asset.component';
import { AssetTableComponent } from "./features/_Shared/AssetTable/assettable.component"

import { YesNoPipe } from './features/_Shared/Pipes/yesno.pipe';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { EditComponent } from './features/Edit/edit.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [ AppComponent, RetireComponent, AllComponent, EmployeeComponent, EditComponent, DetailsComponent, YesNoPipe, AssetComponent, AssetTableComponent],
  imports:      [ FormsModule,ReactiveFormsModule,BrowserModule, HttpClientModule, AppRoutingModule, LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})],
  bootstrap:    [ AppComponent ],
  providers: [AssetService, mockBackendProvider, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule { }
