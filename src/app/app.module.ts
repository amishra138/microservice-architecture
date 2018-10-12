
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { UIRouterModule } from '@uirouter/angular';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './main/dashboard/dashboard.module';
import { AuthModule } from './main/auth/auth.module';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LandingPageModule } from './main/landing-page/landing-page.module';
import { Broadcaster } from '../services/broadcast-event';
import { CampaignModule } from './main/campaign/campaign.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    UIRouterModule.forRoot({ useHash: true, otherwise: '/' }),
    LocalStorageModule.withConfig({
      prefix: 'travesys',
      storageType: 'localStorage'
    }),
    LayoutModule,
    DashboardModule,
    AuthModule,
    LandingPageModule,
    CampaignModule
  ],
  providers: [MDBSpinningPreloader, Broadcaster],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
