import { TestBed, inject } from '@angular/core/testing';

import { MoneyExchangeService } from './money-exchange.service';

describe('MoneyExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoneyExchangeService]
    });
  });

  it('should be created', inject([MoneyExchangeService], (service: MoneyExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
