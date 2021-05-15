import { observable, action, makeAutoObservable, IObservableArray } from "mobx";
import { Order } from "../models/Order";
import { OrderProducts } from "../models/OrderProducts";

import axios from "axios";

export class InvoiceStore {
  @observable
  invoiceProducts: IObservableArray<OrderProducts> = observable.array<OrderProducts>(
    []
  );
  @observable orders: IObservableArray<Order> = observable.array<Order>([]);

  @action setOrder: (orders: any) => void = (orders: any) => {
    this.orders = orders;
  };
  @action setProducts: (products: any) => void = (products: any) => {
    this.invoiceProducts = products;
  };

  @action getOrders() {
    (async () => {
      try {
        await axios
          .get(`${`${process.env.REACT_APP_API_URL}/orders/getOrders` || ""}`)
          .then((res) => {
            this.setOrder(res.data);
            console.log(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }

  @action getProductsOfOrder = (orderID: number) => {
    (async () => {
      try {
        await axios
          .get(
            `${
              `${process.env.REACT_APP_API_URL}/orders/getProductsOfOrder/${orderID}` ||
              ""
            }`
          )
          .then((res) => {
            this.setProducts(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    })();
  };
  constructor() {
    makeAutoObservable(this);
  }
}
export const invoiceStore = new InvoiceStore();
