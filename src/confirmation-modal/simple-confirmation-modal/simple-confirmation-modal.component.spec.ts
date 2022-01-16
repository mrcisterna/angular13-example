import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleConfirmationModalComponent } from './simple-confirmation-modal.component';

describe('SimpleConfirmationModalComponent', () => {
  let component: SimpleConfirmationModalComponent;
  let fixture: ComponentFixture<SimpleConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleConfirmationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
