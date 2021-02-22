import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { HeaderComponent } from './header/header.component';
import { NeedSupportComponent } from './need-support/need-support.component';
import { ProvideSupportComponent } from './provide-support/provide-support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    LinkCardComponent,
    HeaderComponent,
    NeedSupportComponent,
    ProvideSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
