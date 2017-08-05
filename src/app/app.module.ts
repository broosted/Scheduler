import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { StatusNotifyComponent } from './status-notify/status-notify.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CurrentFutureRunsTableComponent } from './current-future-runs-table/current-future-runs-table.component';
import { JobsHistoryComponent } from './jobs-history/jobs-history.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusNotifyComponent,
    ProgressBarComponent,
    CurrentFutureRunsTableComponent,
    JobsHistoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
