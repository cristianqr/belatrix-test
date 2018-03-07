import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MoneyExchange} from '../models/money-exchange.model';

@Injectable()
export class MoneyExchangeService {

  constructor(private http: HttpClient) { }
  getExchangeRate (base: string, symbols: string): Observable<MoneyExchange> {
    return this.http.get<MoneyExchange>(`http://api.fixer.io/latest?base=${base}&symbols=${symbols}`);
  }

}
