import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-title",
  templateUrl: "./page-title.component.html",
  styleUrls: ["./page-title.component.css"]
})
export class PageTitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // document.title = "This is my cool app!";
  }
}
