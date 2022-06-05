import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('multi with numbers valid methode shoud works', () => {
    let res = service.multip(4, 6);
    expect(res).toBe(24);
  })

  it('multi with numbers not valid methode shoud works', () => {
    let res = service.multip(4, 0);
    expect(res).toBe(0);
  })

  it('should return true if param equal to 0', () => {
    let isNull = service.isNull(0);
    expect(isNull).toBe(true);
  })

  it('should return false if param not equal to 0', () => {
    let isNull = service.isNull(20);
    expect(isNull).toBe(false);
  })
});
