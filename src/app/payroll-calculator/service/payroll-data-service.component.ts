import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayrollDataService {

  getData() {
    const data = require('../../../data/data.json');
    return data;
  }
}
