import { NgModule } from '@angular/core';
import {CommonModule, DecimalPipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CommonUtilsService} from './services/common-utils.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [DecimalPipe, CommonUtilsService]
})
export class CoreModule { }
