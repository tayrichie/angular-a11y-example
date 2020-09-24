import { Component } from "@angular/core";
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

  constructor(private titleService: Title) {}

  public ngOnInit() {
    this.titleService.setTitle("My awesome app");
  }

  //public onPageFocus() {
  // document.body.focus();
  //}
}
