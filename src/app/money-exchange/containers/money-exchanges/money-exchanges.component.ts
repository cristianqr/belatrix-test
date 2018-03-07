import { Component, OnInit } from '@angular/core';
import {MoneyExchangeService} from '../../services/money-exchange.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    private moneyExchangeService: MoneyExchangeService
  ) { }

  private makeForm () {
    this.moneyExchangeForm = this.fb.group({
      dollarAmount: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.makeForm();
  }

  getExchangeRate () {
    if (this.moneyExchangeForm.invalid) {
      return;
    }
    this.moneyExchangeService.getExchangeRate(this.base, this.symbols).subscribe(exchangeRate => {
      this.euroExchangeRate = +exchangeRate.rates[this.symbols];
    });
  }

  get totalExchangeAmount() {
    return (this.euroExchangeRate * +this.moneyExchangeForm.get('dollarAmount').value).toFixed(4).toLocaleString();
  }

}
