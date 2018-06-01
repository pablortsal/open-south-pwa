import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SwPush } from "@angular/service-worker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private swPush: SwPush) {}

  ngOnInit() {
    this.swPush
      .requestSubscription({
        serverPublicKey:
          "BNxG_IG_yh3Jqc3q88aXEmnUZsnRfABIb5waaRnc5OGmB3e7uWJmQKGcH_vjzbe9t6H7DUv79FtfZhTtME65vVc"
      })
      .then((pushSubscription: PushSubscription) => {
        console.log(pushSubscription.toJSON());
        console.log(pushSubscription.endpoint);
      });
  }

  about() {
    this.router.navigate(["/about"]);
  }
}

