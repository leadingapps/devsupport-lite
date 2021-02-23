import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { NeedSupportComponent } from './need-support/need-support.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProvideSupportComponent } from './provide-support/provide-support.component';
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [{ path: 'provide-support', component: ProvideSupportComponent }, { path: 'about-us', component: AboutComponent }, { path: 'privacy-policy', component: PrivacyComponent }, { path: 'terms-conditions', component: TermsComponent }, { path: '', component: HomeBannerComponent }, { path: 'home', component: HomeBannerComponent }, { path: 'need-support', component: NeedSupportComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
