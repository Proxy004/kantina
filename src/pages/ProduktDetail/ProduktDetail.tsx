import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useRouteMatch } from "react-router-dom";
const ProduktÜbersicht: React.FC<{ match?: any }> = ({ match }) => {
  const { path } = useRouteMatch();
  console.log(path);

  console.log(match);
  return (
    <>
      <NavBar />
      <div className="productView">
        {/*img*/}
        <div className="productText">
          <div className="productTitle">{/*title*/}</div>
          <div className="productAllergenes">{/*title*/}</div>
          <div className="productTextBot">
            <div className="productIngredients">{/*allerg*/}</div>
            <div className="productDescription">{/*img*/}</div>
          </div>
          <div className="productRowData">
            <div className="productPrice"></div>
            <div className="productMwst">inkl. MwSt</div>
            <div className="productBuy">Jetzt kaufen</div>
          </div>
        </div>
        <div className="productMore">
          *Für mehr Informationen zu Allergenen in unseren Produkten klicken Sie{" "}
          <span className="productThis">hier</span>.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProduktÜbersicht;
