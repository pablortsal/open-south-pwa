import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  title = "app";
  trends: TrendLink[] = [];
  online = true;
  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .get("https://www.reddit.com/r/trendingsubreddits.json")
      .subscribe((res: any) => {
        res.data.children[0].data.title
          .split(":")[1]
          .split(",")
          .forEach(element => {
            let aux = element.replace(/ /g, "");
            this.trends.push({
              title: aux,
              url: "https://www.reddit.com" + aux
            } as TrendLink);
          });
      });
      let that = this;
    window.addEventListener("offline", function(e) {
      that.online = false;
    });

    window.addEventListener("online", function(e) {
      that.online = true;
    });
  }



}

export interface TrendLink {
  title: string;
  url: string;
}
