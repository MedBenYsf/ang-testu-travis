import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  multip(a: number, b: number): number {
    if (!this.isNull(a) && !this.isNull(b)) {
      return a * b;
    }
    return 0;
  }

  isNull(a: number) {
    return a === 0;
  }

}
