import { Component, OnInit, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { elementStart } from "@angular/core/src/render3";
@Component({
  selector: "app-focus-mange",
  templateUrl: "./focus-mange.component.html",
  styleUrls: ["./focus-mange.component.css"]
})
export class FocusMangeComponent implements OnInit {
  constructor(private titleService: Title, private element: ElementRef) {}

  ngOnInit() {
    this.titleService.setTitle("Focus Management");
  }
}
