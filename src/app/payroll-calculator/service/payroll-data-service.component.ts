import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayrollDataService{
  data: {} = {}
  ngOnInit() {
    // this.data = require("../../../data/data.json");
    this.data = require('../../../data/data.json');
    console.log(this.data);
  }

  getData(){
    // console.log(this.data)
    // return this.data;
  }
}
