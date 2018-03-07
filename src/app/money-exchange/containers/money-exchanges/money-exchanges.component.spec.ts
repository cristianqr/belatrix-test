import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyExchangesComponent } from './money-exchanges.component';

describe('MoneyExchangesComponent', () => {
  let component: MoneyExchangesComponent;
  let fixture: ComponentFixture<MoneyExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
