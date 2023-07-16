import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfClassComponent } from './out-of-class.component';

describe('OutOfClassComponent', () => {
  let component: OutOfClassComponent;
  let fixture: ComponentFixture<OutOfClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutOfClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutOfClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
