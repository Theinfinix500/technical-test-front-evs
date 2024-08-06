import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './features/product/store/state/product.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      NgxsModule.forRoot([ProductState], {
        developmentMode: true,
      }),
      NgxsReduxDevtoolsPluginModule.forRoot()
    ),
  ],
};
