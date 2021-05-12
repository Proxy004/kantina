import { observable, action, makeAutoObservable, IObservableArray } from "mobx";
import { Produkt } from "../models/Produkt";
import { CheckoutProduct } from "../models/CheckoutProducts";
import axios from "axios";

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
  @action sendOrderToDb(
    product: IObservableArray<CheckoutProduct>,
    time: string,
    email: string
  ) {
    (async () => {
      try {
        await axios.post(
          `${`${process.env.REACT_APP_API_URL}/orders/newOrder` || ""}`,
          {
            product,
            time,
            email,
          },
          { headers: { "Content-Type": "application/json" } }
        );
      } catch (err) {}
    })();
  }

  @action decreaseAmount = (product: CheckoutProduct) => {
    if (product.quantity > 1) {
      this.checkoutProducts[
        this.checkoutProducts.findIndex(
          (p: CheckoutProduct) => p.produkt_id === product.produkt_id
        )
      ].quantity -= 1;
    } else {
      this.deleteProduct(
        this.checkoutProducts.findIndex(
          (p: CheckoutProduct) => p.produkt_id === product.produkt_id
        )
      );
    }
  };
  @action increaseAmount = (product: CheckoutProduct) => {
    this.checkoutProducts[
      this.checkoutProducts.findIndex(
        (p: CheckoutProduct) => p.produkt_id === product.produkt_id
      )
    ].quantity += 1;
  };
  @action deleteProduct = (i: number) => {
    try {
      this.checkoutProducts.splice(i, 1);
    } catch (err) {
      return "ERROR " + err;
    }
  };
  constructor() {
    makeAutoObservable(this);
  }
}
export const checkoutStore = new CheckoutStore();
