import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FocusMangeComponent } from "./focus-mange.component";

describe("FocusMangeComponent", () => {
  let component: FocusMangeComponent;
  let fixture: ComponentFixture<FocusMangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FocusMangeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusMangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
