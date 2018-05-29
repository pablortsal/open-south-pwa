import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  trends:TrendLink[] = [];

  constructor(private httpService:HttpClient){}

  ngOnInit(): void {


    this.httpService.get(
      "https://www.reddit.com/r/trendingsubreddits.json",

    )
    .subscribe((res:any) =>{
      res.data.children[0].data.title.split(':')[1].split(',').forEach(element => {
        let aux = element.replace(/ /g, '');
          this.trends.push({
              title:aux,
              url: "https://www.reddit.com"+aux
          } as TrendLink)
      });
    })
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}

export interface TrendLink{
  title:string;
  url:string;
}
