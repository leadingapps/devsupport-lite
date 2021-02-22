import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {
  @Input()  linkInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
