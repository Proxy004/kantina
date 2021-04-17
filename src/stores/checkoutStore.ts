import { observable, action, makeAutoObservable } from "mobx";
import { Produkt } from "../models/Produkt";

export class CheckoutStore {
  @observable checkoutProducts: Produkt[] = [];

  @action addProduct = (products: Produkt) => {
    this.checkoutProducts.push(products);
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
