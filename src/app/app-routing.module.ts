import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { NeedSupportComponent } from './need-support/need-support.component';


const routes: Routes = [{path:'', component: HomeBannerComponent},{path:'home', component: HomeBannerComponent}, {path:'need-support',component: NeedSupportComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
