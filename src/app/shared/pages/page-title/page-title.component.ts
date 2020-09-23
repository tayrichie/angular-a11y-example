import { Component, OnInit, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-page-title",
  templateUrl: "./page-title.component.html",
  styleUrls: ["./page-title.component.css"]
})
export class PageTitleComponent implements OnInit {
  constructor(
    private titleService: Title,
    private element: ElementRef
  ) {}

  public ngOnInit() {
    this.titleService.setTitle("Page Titles in Angular");
    this.element.nativeElement.querySelector("h2").focus();
  }
}
