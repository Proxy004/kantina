import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./ProduktDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Produkt } from "../../models/Produkt";
import { productStore } from "../../stores/productStore";

interface ProduktÜbersichtProps {
  match?: any;
  //checkoutStore?: CheckoutStore;
}

const ProduktÜbersicht: React.FC<ProduktÜbersichtProps> = ({
  match,
}: ProduktÜbersichtProps) => {
  const [productDetailInfos, setProductDetailInfos] = useState<Produkt>({
    bezeichnung: "",
    beschreibung: "",
    inhaltsstoffe: "",
    urlPfad: "",
    bildPfad: "",
    preis: 0,
    allergene: "",
    kategorie: "",
  });

  useEffect(() => {
    {
      productStore.product
        .filter((products) =>
          products.urlPfad.includes(match.params.productUrl)
        )
        .map((filteredProduct: Produkt) => () => {
          setProductDetailInfos(filteredProduct);
        });
    }
  });

  return (
    <>
      <NavBar />
      <div className="productView">
        <img
          src={require(`../../assets/${productDetailInfos.bildPfad}`).default}
          alt={"product"}
          className={"productPicture"}
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
            <div className="productBuy">
              <div className="productShoppingIcon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              Jetzt kaufen
            </div>
          </div>

          <div className="productMore">
            *Für mehr Informationen zu Allergenen in unseren Produkten klicken
            Sie{" "}
            <Link>
              <span className="productThis">hier</span>.
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProduktÜbersicht;
