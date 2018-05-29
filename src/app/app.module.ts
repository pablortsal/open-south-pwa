import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";
import { RedditComponent } from "./pages/reddit/reddit.component";
import { AboutComponent } from "./pages/about/about.component";

const routes: Routes = [
  { path: "", component: RedditComponent },
  { path: "about", component: AboutComponent }
];
@NgModule({
  declarations: [AppComponent, RedditComponent, AboutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
