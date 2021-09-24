import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TreeviewModule } from './treeview/treeview.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TreeviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
