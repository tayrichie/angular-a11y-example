import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AriaLiveComponent } from "./aria-live.component";

describe("AriaLiveComponent", () => {
  let component: AriaLiveComponent;
  let fixture: ComponentFixture<AriaLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AriaLiveComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
