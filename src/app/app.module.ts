import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {DefaultTemplateModule} from './default-template/default-template.module';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule,
    AppRoutingModule,
    DefaultTemplateModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
