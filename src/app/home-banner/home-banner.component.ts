import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  needSupport = {header: 'I am looking for Support', subHeader: 'Support starting as low as $10 per issue*'}
  provideSupport = {header: 'I Can provide technical Support', subHeader: 'Best oppurtunity to get paid for your skills.'}
  constructor() { }
  
  ngOnInit(): void {
  }

}
