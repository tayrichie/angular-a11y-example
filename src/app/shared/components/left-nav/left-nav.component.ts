import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-left-nav",
  templateUrl: "./left-nav.component.html",
  styleUrls: ["./left-nav.component.css"]
})
export class LeftNavComponent implements OnInit {
  ngOnInit() {}
  public constructor(private titleService: Title) {}
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
