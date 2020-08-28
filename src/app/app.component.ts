import { Component, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Deque Angular Test Harness";
  author = "Mark Steadman";
  dynamContent = "Plain old boring content";
  buttonClicked = false;

  constructor(private titleService: Title, private element: ElementRef) {}

  public ngOnInit() {
    this.titleService.setTitle("My awesome app");
    this.element.nativeElement.querySelector(".-oneX-header").focus();
  }
}
