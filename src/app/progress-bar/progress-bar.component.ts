import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

@HostBinding('attr.class') cssClass = 'width';
amount : number;
  constructor() { 
    this.amount = 50;
  }

  ngOnInit() {
  }

}
