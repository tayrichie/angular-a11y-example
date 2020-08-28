import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgAriaComponent } from "./ng-aria.component";

describe("NgAriaComponent", () => {
  let component: NgAriaComponent;
  let fixture: ComponentFixture<NgAriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgAriaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
