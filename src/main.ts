import {enableProdMode, importProvidersFrom, LOCALE_ID} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {registerLocaleData} from "@angular/common";
import localeDe from "@angular/common/locales/de-AT";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app/app.routes";


registerLocaleData(localeDe, 'de-AT');

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {

  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)),
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'de-AT'
    },
    {provide: LOCALE_ID, useValue: 'de-AT'},
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'outline'}
    }
  ],
})
