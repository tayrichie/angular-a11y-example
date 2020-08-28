import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-aria-live",
  templateUrl: "./aria-live.component.html",
  styleUrls: ["./aria-live.component.css"]
})
export class AriaLiveComponent implements OnInit {
  dynamContent = "Plain old boring content";
  buttonClicked = false;
  constructor() {}

  ngOnInit() {}

  public onCreateDynamicContent() {
    this.dynamContent = "This content was created async";
  }

  public onCreateDynamicMarkup() {
    this.buttonClicked = true;
  }
}
