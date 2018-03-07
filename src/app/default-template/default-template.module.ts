import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  exports: [
    ...fromContainers.containers
  ]
})
export class DefaultTemplateModule { }
