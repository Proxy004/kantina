import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { invoiceStore } from "../../stores/invoiceStore";
import "./KantinenSicht.scss";
import { Order } from "../../models/Order";
import { OrderProducts } from "../../models/OrderProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import gsap from "gsap";
import Animation from "./AnimationEmptyAdmin/AnimationOrderCompleted";
const KantinenSicht = () => {
  const [showOrdersStart, setShowOrdersStart] = useState(0);
  const [showOrdersEnd, setShowOrdersEnd] = useState(1);

  useEffect(() => {
    gsap.fromTo(
      ".adminArticleTitle",
      1,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1 }
    );
    gsap.fromTo(
      ".adminArticleQuantity",
      1,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1 }
    );
    gsap.fromTo(
      ".adminArticlePrice",
      1,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1 }
    );
    gsap.fromTo(
      ".adminOrderTime",
      1,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1 }
    );
    gsap.fromTo(
      ".iconOrderChecked",
      1,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1 }
    );
    gsap.fromTo(
      ".iconOrderNotChecked",
      1,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1 }
    );
    gsap.fromTo(
      ".iconOrderChecked1",
      5,
      { x: 50, opacity: 1 },
      { x: 0, opacity: 0 }
    );
    gsap.fromTo(
      ".iconOrderNotChecked1",
      5,
      { x: 50, opacity: 1 },
      { x: 0, opacity: 0 }
    );
    (async () => {
      let all: any;
      await invoiceStore.getOrders();
      toJS(invoiceStore.orders)
        .slice(showOrdersStart, showOrdersEnd)
        .map((filteredProduct: Order) => {
          all = filteredProduct.bestellung_id;
        });
      await invoiceStore.getProductsOfOrder(all);
    })();
  }, []);

  return (
    <div>
      <NavBar />
      <div className={"adminAll"}>
        <div className="adminTitle">Bestellübersicht</div>
        {invoiceStore.orders.length >= 1 ? (
          invoiceStore.orders
            .slice(showOrdersStart, showOrdersEnd)
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
                      Bestellung {order.bestellung_id} - {order.vorname}{" "}
                      {order.nachname}
                    </div>
                    <div className={"adminTitelQuantity"}>Menge</div>
                    <div className={"adminTitelPrice"}>Preis</div>
                    <div className={"adminTitelTime"}>Abholzeit</div>
                    <div className={"adminTitelReady"}>Fertig?</div>
                    <div className={"adminOrderTime"}>
                      {time2[0].slice(0, 5)}
                    </div>
                    <div className={"adminOrderReady"}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        onClick={() => {
                          invoiceStore.setOrderChecked(order.bestellung_id);
                          setShowOrdersEnd(showOrdersEnd + 1);
                          setShowOrdersStart(showOrdersStart + 1);
                          invoiceStore.getProductsOfOrder(
                            order.bestellung_id + 1
                          );
                          invoiceStore.deleteProduct(i);
                        }}
                        className={"iconOrderChecked"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={"iconOrderNotChecked"}
                      />
                    </div>

                    {invoiceStore.invoiceProducts.map(
                      (orderProducts: OrderProducts) => {
                        return (
                          <>
                            <div className="adminArticleTitle">
                              {orderProducts.bezeichnung}
                            </div>
                            <div className="adminArticleQuantity">
                              {orderProducts.menge}
                            </div>
                            <div className="adminArticlePrice">
                              € {orderProducts.preis.toFixed(2)}
                            </div>
                          </>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })
        ) : (
          <div className="adminNoOrders">
            <Animation />
            <div className="adminTitleNoOrders">Keine Bestellungen!</div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default inject("invoiceStore")(observer(KantinenSicht));
