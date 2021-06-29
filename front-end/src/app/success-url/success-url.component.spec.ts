import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessUrlComponent } from './success-url.component';

describe('SuccessUrlComponent', () => {
  let component: SuccessUrlComponent;
  let fixture: ComponentFixture<SuccessUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
