import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { LinkCardComponent } from './link-card/link-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    LinkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
