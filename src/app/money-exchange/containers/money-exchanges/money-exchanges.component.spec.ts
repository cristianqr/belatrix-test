import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyExchangesComponent } from './money-exchanges.component';
import {Observable} from 'rxjs';
import {MoneyExchangeService} from '../../services/money-exchange.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonUtilsService} from '../../../core/services/common-utils.service';
import {CommonModule, DecimalPipe} from '@angular/common';

class MockMoneyExchangeService {
  getExchangeRate (base: string, symbols: string) {
    return Observable.of(
      {
        'base': 'USD',
        'date': '2018-03-07',
        'rates': {'EUR': 2}
      });
  }
}

describe('Component: MoneyExchangesComponent', () => {
  let component: MoneyExchangesComponent;
  let fixture: ComponentFixture<MoneyExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [ MoneyExchangesComponent],
      providers: [
        CommonUtilsService,
        DecimalPipe,
        {provide: MoneyExchangeService, useClass: MockMoneyExchangeService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create MoneyExchangesComponent', () => {
    expect(component).toBeTruthy();
  });

  it('totalExchangeAmount method Should calculate exchange amount ', () => {
    component.moneyExchangeForm.get('dollarAmount').patchValue('200');
    component.getExchangeRate();
    fixture.detectChanges();
    expect(component.totalExchangeAmount).toEqual(400);
  });

  it ('totalExchangeAmount field should have correct format', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.moneyExchangeForm.get('dollarAmount').patchValue('1000.55558');
    component.getExchangeRate();
    fixture.detectChanges();
    expect(compiled.querySelector('#totalExchangeAmount').value).toEqual('2,001.1112');
  });
});
