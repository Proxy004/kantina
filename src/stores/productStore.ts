import { observable, action, makeAutoObservable } from "mobx";
import axios from "axios";
import { Produkt } from "../models/Produkt";

export class ProductStore {
  @observable product: Produkt[] = [];

  @action getAllProducts() {
    (async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/products` || "")
          .then((res) => {
            this.setProducts(res.data);
          });
      } catch (err) {
        console.log(err + " Items");
      }
    })();
  }

  @action setProducts: (products: Array<any>) => void = (
    products: Array<any>
  ) => {
    this.product = products;
  };

  constructor() {
    makeAutoObservable(this);
  }
}
export const productStore = new ProductStore();
