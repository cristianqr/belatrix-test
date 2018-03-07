import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromContainers from './containers';
import * as fromServices from './services';
import {MoneyExchangeRoutingModule} from './money-exchange-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MoneyExchangeRoutingModule
  ],
  declarations: [...fromContainers.containers],
  providers: [...fromServices.services]
})
export class MoneyExchangeModule { }
