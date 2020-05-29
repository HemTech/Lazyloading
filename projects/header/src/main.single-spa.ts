import './set-public-path';
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
import { AppHeaderModule } from './app/app-header.module';
import { environment } from './environments/environment';
import singleSpaAngular from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic().bootstrapModule(AppHeaderModule);
  },
  template: '<app-header />',
  Router,
  NgZone,
  AnimationEngine,
  domElementGetter(): HTMLElement {
    let containerEl = document.getElementById('app-header');
    if (!containerEl) {
      containerEl = document.createElement('div');
      containerEl.id = 'app-header';
      document.body.appendChild(containerEl);
    }
    return containerEl;
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
