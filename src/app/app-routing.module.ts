import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { NeedSupportComponent } from './need-support/need-support.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [{path:'privacy-policy', component: PrivacyComponent},{path:'terms-conditions', component: TermsComponent}, {path:'', component: HomeBannerComponent},{path:'home', component: HomeBannerComponent}, {path:'need-support',component: NeedSupportComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
