import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() conn: string;
  loding :boolean = true;
  dataSet = [];
  constructor(private http:HttpClient) {
      
   }

  ngOnInit() {
    this.http.get(`http://localhost:8080/${this.conn}.json`).subscribe((res:any)=> {
      console.log(this.conn);
        this.loding = false;
        this.dataSet=res;
      });
  }

}
