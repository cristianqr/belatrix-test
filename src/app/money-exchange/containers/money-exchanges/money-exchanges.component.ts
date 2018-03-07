import { Component, OnInit } from '@angular/core';
import {MoneyExchangeService} from '../../services/money-exchange.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonUtilsService} from '../../../core/services/common-utils.service';
import {CommonValidators} from '../../../core/services/common-validators.service';

@Component({
  selector: 'app-money-exchanges',
  templateUrl: './money-exchanges.component.html',
  styleUrls: ['./money-exchanges.component.scss']
})
export class MoneyExchangesComponent implements OnInit {
  moneyExchangeForm: FormGroup;
  symbols = 'EUR';
  base = 'USD';
  euroExchangeRate = 0;

  constructor(
    private fb: FormBuilder,
    private moneyExchangeService: MoneyExchangeService,
    private commonUtilsService: CommonUtilsService
  ) { }

  private makeForm () {
    this.moneyExchangeForm = this.fb.group({
      dollarAmount: ['', [Validators.required, CommonValidators.number]]
    });
  }

  ngOnInit() {
    this.makeForm();
  }

  getExchangeRate () {
    this.moneyExchangeService.getExchangeRate(this.base, this.symbols).subscribe(exchangeRate => {
      this.euroExchangeRate = +exchangeRate.rates[this.symbols];
    });
  }

  get totalExchangeAmount() {
    return this.euroExchangeRate * this.commonUtilsService.convertStringToNumber(this.moneyExchangeForm.get('dollarAmount').value);
  }

  onInputDollarAmount () {
    this.euroExchangeRate = 0;
  }

  onChangeDollarAmount () {
    this.moneyExchangeForm.get('dollarAmount').patchValue(this.commonUtilsService.formatNumber(this.moneyExchangeForm.get('dollarAmount').value));
  }
}
