import { observable, action, makeAutoObservable } from "mobx";
import { Produkt } from "../models/Produkt";
import { CheckoutProduct } from "../models/CheckoutProducts";

export class CheckoutStore {
  @observable checkoutProducts: CheckoutProduct[] = [];
  private zähler = 0;
  private checkProduct: CheckoutProduct = {
    produkt_id: 1,
    bezeichnung: "",
    preis: 0,
    bildPfad: "",
    urlPfad: "",
    quantity: 1,
  };
  @action addProduct = (products: Produkt) => {
    if (this.checkoutProducts.length >= 1) {
      this.checkoutProducts.forEach((element, i) => {
        if (element.produkt_id === products.produkt_id) {
          this.removeProduct(i);
          this.zähler++;
          this.checkProduct = {
            produkt_id: products.produkt_id,
            bezeichnung: products.bezeichnung,
            preis: products.preis,
            bildPfad: products.bildPfad,
            urlPfad: products.urlPfad,
            quantity: this.zähler,
          };
        }
      });
    } else {
      this.checkProduct = {
        produkt_id: products.produkt_id,
        bezeichnung: products.bezeichnung,
        preis: products.preis,
        bildPfad: products.bildPfad,
        urlPfad: products.urlPfad,
        quantity: 1,
      };
    }

    this.checkoutProducts.push(this.checkProduct);
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
