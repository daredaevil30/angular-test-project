import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';
import Nora from '@primeng/themes/nora';
import Material from '@primeng/themes/material';
import { definePreset } from '@primeng/themes';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

const Noir = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
      },
      colorScheme: {
          light: {
              primary: {
                  color: '{zinc.950}',
                  inverseColor: '#ffffff',
                  hoverColor: '{zinc.900}',
                  activeColor: '{zinc.800}'
              },
              highlight: {
                  background: '{zinc.950}',
                  focusBackground: '{zinc.700}',
                  color: '#ffffff',
                  focusColor: '#ffffff'
              }
          },
          dark: {
              primary: {
                  color: '{zinc.50}',
                  inverseColor: '{zinc.950}',
                  hoverColor: '{zinc.100}',
                  activeColor: '{zinc.200}'
              },
              highlight: {
                  background: 'rgba(250, 250, 250, .16)',
                  focusBackground: 'rgba(250, 250, 250, .24)',
                  color: 'rgba(255,255,255,.87)',
                  focusColor: 'rgba(255,255,255,.87)'
              }
          }
      }
  }
});


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Noir,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          }

        }
      }
    })
  ]
};
