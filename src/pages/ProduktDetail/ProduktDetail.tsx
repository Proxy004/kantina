import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Product } from "../../models/Product";
import axios from "axios";

interface ProduktÜbersichtProps {
  match?: any;
  //checkoutStore?: CheckoutStore;
}

const ProduktÜbersicht: React.FC<ProduktÜbersichtProps> = ({
  match,
}: ProduktÜbersichtProps) => {
  const [product, setProduct] = useState<Product>({
    bezeichnung: "",
    beschreibung: "",
    inhaltsstoffe: "",
    urlPfad: "",
    bildPfad: "",
    preis: 0,
    allergene: "",
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        await axios
          .get(
            `${
              `${process.env.REACT_APP_API_URL}/product/${match.params.productUrl}` ||
              ""
            }`
          )
          .then((res) => {
            setProduct(res.data);
          });
      } catch (err) {
        console.log(err + " Items");
      }
    };
    getUserInfo();
  }, [setProduct, match]);

  return (
    <>
      <NavBar />
      <div className="productView">
        <img src={product.bildPfad} alt={"product"} />
        <div className="productText">
          <div className="productTitle">{product.bezeichnung}</div>
          <div className="productAllergenes">{product.allergene}</div>
          <div className="productTextBot">
            <div className="productIngredients">{product.inhaltsstoffe}</div>
            <div className="productDescription">{product.beschreibung}</div>
          </div>
          <div className="productRowData">
            <div className="productPrice">{product.preis}</div>
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
