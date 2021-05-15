import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { invoiceStore } from "../../stores/invoiceStore";
import "./KantinenSicht.scss";
import { Order } from "../../models/Order";
import { OrderProducts } from "../../models/OrderProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
const KantinenSicht = () => {
  useEffect(() => {
    invoiceStore.getOrders();
  }, []);
  const [showOrders, setShowOrders] = useState(0);
  return (
    <div>
      <NavBar />
      <div className={"adminAll"}>
        <div className="adminTitle">Bestellübersicht</div>
        {invoiceStore.orders
          .slice(showOrders, showOrders + 1)
          .map((order: Order, i: number) => {
            let time: Date = order.abholzeit;
            let time1: string[];
            let time2: string[];
            time1 = time.toString().split("T");
            time2 = time1[1].split(".");

            return (
              <div key={i}>
                <div className="adminOrder">
                  <div className="adminOrderName">
                    Bestellung {i + 1} - {order.vorname} {order.nachname}
                  </div>
                  <div className={"adminTitelQuantity"}>Menge</div>
                  <div className={"adminTitelPrice"}>Preis</div>
                  <div className={"adminTitelTime"}>Abholzeit</div>
                  <div className={"adminTitelReady"}>Fertig?</div>
                  <div className={"adminOrderTime"}>{time2[0]}</div>
                  <div className={"adminOrderReady"}>
                    <FontAwesomeIcon icon={faCheck} />
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                  {invoiceStore.getProductsOfOrder(order.bestellung_id)}
                  {invoiceStore.invoiceProducts.map(
                    (orderProducts: OrderProducts, i: number) => {
                      return (
                        <>
                          <div className="adminArticleTitle">
                            {orderProducts.bezeichnung}
                          </div>
                          <div className="adminArticleQuantity">
                            {orderProducts.menge}
                          </div>
                          <div className="adminArticlePrice">
                            € {orderProducts.preis}
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default KantinenSicht;
