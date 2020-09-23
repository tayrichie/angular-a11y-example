import { Component, OnInit, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-focus-mange",
  templateUrl: "./focus-mange.component.html",
  styleUrls: ["./focus-mange.component.css"]
})
export class FocusMangeComponent implements OnInit {
  constructor(
    private titleService: Title,
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Focus Management");
    this.element.nativeElement.querySelector("h2").focus();
  }

  toggleModal() {
    // this.isVisible = !this.isVisible;
    console.log("toggle modal");
  }
}
