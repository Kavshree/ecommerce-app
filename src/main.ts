import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {LandingPageModule} from './app/Home/landing-page-module.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(LandingPageModule)
  .catch(err => console.error(err));
