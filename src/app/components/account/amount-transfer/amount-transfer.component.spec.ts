import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountTransferComponent } from './amount-transfer.component';

describe('AmountTransferComponent', () => {
  let component: AmountTransferComponent;
  let fixture: ComponentFixture<AmountTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
