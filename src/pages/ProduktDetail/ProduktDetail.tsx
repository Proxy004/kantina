import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./ProduktDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Produkt } from "../../models/Produkt";
import { productStore } from "../../stores/productStore";
import { checkoutStore } from "../../stores/checkoutStore";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

interface ProduktÜbersichtProps {
  match?: any;
  //checkoutStore?: CheckoutStore;
}

const ProduktÜbersicht: React.FC<ProduktÜbersichtProps> = ({
  match,
}: ProduktÜbersichtProps) => {
  const [productDetailInfos, setProductDetailInfos] = useState<Produkt>({
    produkt_id: 0,
    bezeichnung: "",
    beschreibung: "",
    inhaltsstoffe: "",
    urlPfad: "",
    bildPfad: "salamibrot.jpg",
    preis: 0,
    allergene: "",
    kategorie: "",
  });

  useEffect(() => {
    toJS(productStore.product).filter((filteredProduct: Produkt) => {
      if (filteredProduct.urlPfad === match.params.productUrl) {
        setProductDetailInfos(filteredProduct);
      }
    });
  }, [setProductDetailInfos, match.params.productUrl]);

  return (
    <>
      <NavBar />

      <div className="productView">
        <img
          src={require(`../../assets/${productDetailInfos.bildPfad}`).default}
          alt="product"
          className="productPicture"
        />
        <div className="productText">
          <div className="productTitle">{productDetailInfos.bezeichnung}</div>
          <div className="productAllergenes">
            {productDetailInfos.allergene}
          </div>
          <div className="productTextBot">
            <div className="productIngredients">
              <div className="productIngredientsTitle">Zutaten:</div>
              {productDetailInfos.inhaltsstoffe}
            </div>
            <div className="productDescription">
              <div className="productIngredientsTitle">Beschreibung:</div>
              {productDetailInfos.beschreibung}
            </div>
          </div>
          <div className="productRowData">
            <div className="productPriceAll">
              <div className="productPrice">€ {productDetailInfos.preis}</div>
              <div className="productMwst">inkl. MwSt</div>
            </div>
            <div
              className="productBuy"
              onClick={() => checkoutStore.addProduct(productDetailInfos)}
            >
              <div className="productShoppingIcon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              Jetzt kaufen
            </div>
          </div>

          <div className="productMore">
            *Für mehr Informationen zu Allergenen in unseren Produkten klicken
            Sie{" "}
            <Link to>
              <span className="productThis">hier</span>.
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default inject("checkoutStore")(observer(ProduktÜbersicht));
