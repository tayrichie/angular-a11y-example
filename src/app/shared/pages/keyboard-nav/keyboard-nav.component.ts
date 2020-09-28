import { Component, OnInit, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-keyboard-nav",
  templateUrl: "./keyboard-nav.component.html",
  styleUrls: ["./keyboard-nav.component.css"]
})
export class KeyboardNavComponent implements OnInit {
  constructor(
    private titleService: Title,
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Keyboard Navigation");
    this.element.nativeElement.querySelector("h2").focus();
  }

  testButtonClick() {
    alert("fake button click!");
  }

  actualButtonClick() {
    console.log("button click");
  }
}
