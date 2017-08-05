export class RunDates{

reportname : string;
date: number = Date.now();

constructor(reportname :string,date : number){

    this.reportname = reportname;
    this.date = date;
}



}