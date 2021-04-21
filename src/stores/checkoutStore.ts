import { observable, action, makeAutoObservable } from "mobx";
import { Produkt } from "../models/Produkt";
import { Quantity } from "../models/Quantity";

export class CheckoutStore {
  private quantityItem: Quantity = {
    bezeichnung: "",
    quantity: 0,
  };
  @observable checkoutProducts: Produkt[] = [];
  @observable quantity: Quantity[] = [];
  private zähler = 0;

  @action addProduct = (products: Produkt) => {
    if (this.checkoutProducts.length >= 1) {
      this.checkoutProducts.forEach((product) => {
        if (products.bezeichnung === product.bezeichnung) {
          this.zähler++;
          this.quantityItem.bezeichnung = product.bezeichnung;
          this.quantityItem.quantity = this.zähler;
          this.quantity.push(this.quantityItem);
          this.checkoutProducts.push(products);
          console.log(1);
        } else {
          this.checkoutProducts.push(products);
          console.log(2);
        }
      });
    } else {
      this.checkoutProducts.push(products);
      console.log(3);
    }
  };
  @action removeProduct = (index: number) => {
    try {
      this.checkoutProducts.splice(index, 1);
    } catch (e) {}
  };
  constructor() {
    makeAutoObservable(this);
  }
}
export const checkoutStore = new CheckoutStore();
