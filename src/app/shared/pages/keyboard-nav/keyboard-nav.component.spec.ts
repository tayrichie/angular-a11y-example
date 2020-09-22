import {
  async,
  ComponentFixture,
  TestBed
} from "@angular/core/testing";

import { KeyboardNavComponent } from "./keyboard-nav.component";

describe("KeyboardNavComponent", () => {
  let component: KeyboardNavComponent;
  let fixture: ComponentFixture<KeyboardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeyboardNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
