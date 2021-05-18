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

  private setOrder: (orders: any) => void = (orders: any) => {
    this.orders = orders;
  };
  private setProducts: (products: any) => void = (products: any) => {
    this.invoiceProducts = products;
  };

  @action getOrders = async (): Promise<any> => {
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
  };

  @action getProductsOfOrder = async (orderID: number): Promise<any> => {
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
  };
  @action setOrderChecked = (orderID: number) => {
    (async () => {
      try {
        await axios.post(
          `${
            `${process.env.REACT_APP_API_URL}/orders/setOrderClosed/${orderID}` ||
            ""
          }`
        );
      } catch (err) {
        console.log(err);
      }
    })();
  };
  @action deleteProduct = (i: number) => {
    try {
      this.orders.splice(i, 1);
    } catch (err) {
      return "ERROR " + err;
    }
  };
  constructor() {
    makeAutoObservable(this);
  }
}
export const invoiceStore = new InvoiceStore();
