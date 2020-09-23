import { Component, OnInit, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-aria-live",
  templateUrl: "./aria-live.component.html",
  styleUrls: ["./aria-live.component.css"]
})
export class AriaLiveComponent implements OnInit {
  dynamContent = "Plain old boring content";
  buttonClicked = false;
  constructor(
    private titleService: Title,
    private element: ElementRef
  ) {}

  public ngOnInit() {
    this.titleService.setTitle("Aria Live and Alert Regions");
    this.element.nativeElement.querySelector("h2").focus();
  }

  public onCreateDynamicContent() {
    this.dynamContent = "This content was created async";
  }

  public onCreateDynamicMarkup() {
    this.buttonClicked = true;
  }
}
