import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [AppComponent, CatalogComponent],
  imports: [BrowserModule, MatToolbarModule, FlexLayoutModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
