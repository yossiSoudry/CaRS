import { inputs } from "./variables.js";

export class AutoFill {
  constructor(_item, _names) {
    this.code = _item.tozeret_cd;
    this.model = _item.kinuy_mishari;
    this.year = _item.moed_aliya_lakvish;
    this.color = _item.tzeva_rechev;
    this.gimur =_item.ramat_gimur;
    this.test = _item.tokef_dt;
    this.objE = _names[0];
    this.objH = _names[1];
  }

  render() {
    // inputs[2].innerHTML = this.objE[this.code].toUpperCase();
    inputs[2].value = this.objH[this.code];
    inputs[3].value = this.model;
    inputs[4].value = this.year.slice(0,4);
    inputs[5].value = this.color;
    inputs[6].value = this.gimur;
    inputs[10].value = this.test.slice(0,10)
    console.log(this.objH[this.code]);
  }
}