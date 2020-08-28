import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { AriaLiveComponent } from "./shared/pages/aria-live/aria-live.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { LeftNavComponent } from "./shared/components/left-nav/left-nav.component";
import * as attestReporter from "karma-attest-reporter";
import * as attest from "attest";

describe("AppComponent", () => {
  beforeEach(async(() => {
    attest.init("wcag2");
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        AriaLiveComponent,
        HeaderComponent,
        LeftNavComponent
      ]
    }).compileComponents();
  }));

  it("should have no accessibility violations", (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    attest.run(compiled, (err, results) => {
      expect(err).toBe(null);
      attestReporter.logTestResult(results);
      expect(results.violations.length).toBe(0);
      done();
    });
  });
});
