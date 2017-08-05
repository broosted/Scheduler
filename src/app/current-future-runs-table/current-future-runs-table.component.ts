import { Component, OnInit } from '@angular/core';
import { RunDates } from './run.dates';
import { DatePipe } from '@angular/common';

import * as _ from 'underscore';

@Component({
  selector: 'app-current-future-runs-table',
  templateUrl: './current-future-runs-table.component.html',
  styleUrls: ['./current-future-runs-table.component.css']
})
export class CurrentFutureRunsTableComponent implements OnInit {

rundates : RunDates[];


constructor() {
this.rundates = [new RunDates('Alpha1', Date.now())
,new RunDates('Alpha2', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha4', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
,new RunDates('Alpha3', Date.now())
];

   }

  ngOnInit() {
    this.setPage(1);
  }





   getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
 
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        // create an array of pages to ng-repeat in the pager control
        let pages = _.range(startPage, endPage + 1);
 
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: RunDates[];
 
 
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.getPager(this.rundates.length, page);
 
        // get current page of items
        this.pagedItems = this.rundates.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }






}
