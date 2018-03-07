import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';

import * as fromContainers from './containers';

export const routes: Routes = [
  {
    path: '',
    component: fromContainers.MoneyExchangesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoneyExchangeRoutingModule { }
