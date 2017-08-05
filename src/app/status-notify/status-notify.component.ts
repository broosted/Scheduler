import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-notify',
  templateUrl: './status-notify.component.html',
  styleUrls: ['./status-notify.component.css']
})
export class StatusNotifyComponent implements OnInit {

jobnotrun: boolean;
jobrun: boolean;
jobsuccess:  boolean;
jobfailed: boolean;
scheduleron : boolean;
scheduleroff : boolean;
jobname : string;

  constructor() { 
    this.jobnotrun = true;
    this.jobrun = true;
    this.jobsuccess = true;
    this.jobfailed = true;
    this.jobname = 'Alpha';
    this.scheduleroff = true;
    this.scheduleron = true;

  }

  ngOnInit() {
  }

}
