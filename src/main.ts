import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from "@npm-bbta/bbog-dig-dt-webcomponents-lib/loader";
import { AppModule } from './app/app.module';


defineCustomElements();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
