import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailUrlComponent } from './fail-url.component';

describe('FailUrlComponent', () => {
  let component: FailUrlComponent;
  let fixture: ComponentFixture<FailUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
