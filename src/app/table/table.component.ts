import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,AfterViewInit {
  @Input() conn: string;
  @ViewChild('basicTable') basicTable:ElementRef;
  loding :boolean = true;
  dataSet = [];
  constructor(private http:HttpClient) {
      
   }

  ngOnInit() {
    
    this.http.get(`http://localhost:8080/${this.conn}.json`).subscribe((res:any)=> {

        this.loding = false;
        this.dataSet=res;
      });
  }
  ngAfterViewInit() {
    let table = this.basicTable.nativeElement;
      console.log("table:" + table);
  }
}
