import { observable, action, makeAutoObservable, IObservableArray } from "mobx";
import { Produkt } from "../models/Produkt";
import { CheckoutProduct } from "../models/CheckoutProducts";

export class CheckoutStore {
  @observable
  checkoutProducts: IObservableArray<CheckoutProduct> = observable.array<CheckoutProduct>(
    []
  );

  @action addProduct = (product: Produkt) => {
    if (
      this.checkoutProducts.some(
        (p: CheckoutProduct) => p.produkt_id === product.produkt_id
      )
    ) {
      this.checkoutProducts[
        this.checkoutProducts.findIndex(
          (p: CheckoutProduct) => p.produkt_id === product.produkt_id
        )
      ].quantity += 1;
    } else {
      this.checkoutProducts.push({ ...product, quantity: 1 });
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
