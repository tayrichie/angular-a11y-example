import { Component, OnInit, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-focus-mange",
  templateUrl: "./focus-mange.component.html",
  styleUrls: ["./focus-mange.component.css"]
})
export class FocusMangeComponent implements OnInit {
  constructor(private titleService: Title, private element: ElementRef) {}
  ariaFocus = false;
  formNext = false;
  ngOnInit() {
    this.titleService.setTitle("Focus Management");

    //Page-Focus Option 1
    // this.element.nativeElement.querySelector("h1").focus();
  }

  toggleAutoFocus() {
    this.ariaFocus = true;
    //Dynamic-Focus Option 1
    setTimeout(() => {
      //  this.element.nativeElement.querySelector("#autoInput").focus();
    }, 300);
  }
  toggleNext() {
    this.formNext = true;
    setTimeout(() => {
      this.element.nativeElement.querySelector("#newForm").focus();
    }, 300);
  }
  toggleModal() {
    //this.isVisible = !this.isVisible;
    console.log("toggle modal");
  }
}
