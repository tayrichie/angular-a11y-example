import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[a11yAutoFocus]"
})
export class AutoFocusDirective {
  @Input()
  public set a11yAutoFocus(value) {
    if (!!value) {
      this.host.nativeElement.focus();
    }
  }

  public constructor(private host: ElementRef) {}
}
