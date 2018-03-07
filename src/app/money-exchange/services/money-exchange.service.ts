import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MoneyExchange} from '../models/money-exchange.model';
import {current} from 'codelyzer/util/syntaxKind';
import {map} from 'rxjs/operators';

@Injectable()
export class MoneyExchangeService {
  currentRate: MoneyExchange;
  lastRequestTime = 0;

  constructor(private http: HttpClient) { }
  getExchangeRate (base: string, symbols: string): Observable<MoneyExchange> {
    if (this.currentRate && this.getMinutesLastRequest() < 10) {
      return Observable.of(this.currentRate);
    }else {
      this.lastRequestTime = new Date().getTime();
      return this.http
        .get<MoneyExchange>(`http://api.fixer.io/latest?base=${base}&symbols=${symbols}`)
        .pipe(
          map(res => {
            this.currentRate = res;
            return res;
          })
        );
    }
  }

  private getMinutesLastRequest () {
    const difference = new Date().getTime() - this.lastRequestTime;
    return Math.round(difference / (1000 * 60));
  }
}
