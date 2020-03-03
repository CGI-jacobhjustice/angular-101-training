import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
// used to create fake backend
import { mockBackendProvider } from './helpers/mock-backend';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AssetService } from './services/asset.service';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { GoodbyeComponent } from './hello/goodbye.component';


@NgModule({
  declarations: [ AppComponent, HelloComponent, GoodbyeComponent],
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  bootstrap:    [ AppComponent ],
  providers: [AssetService, mockBackendProvider, {provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
