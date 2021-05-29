import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Impressum.scss";

const Impressum = () => {
  return (
    <>
      <NavBar />
      <div className="allImpressum">
        <span className="titleImpressum">Impressum</span>
        <div className="contentImpressum">
          <p>
            Informationspflicht laut §5 E-Commerce Gesetz, §14
            Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht
            laut §25 Mediengesetz.
          </p>

          <p>
            <span className="boldImpressum">Kantina GmbH</span>
            <br />
            Gebhard Strohmaier <br />
            Hinterfeldgasse 19
            <br />
            6900 Bregenz <br />
            Österreich
          </p>
          <p>
            Unternehmensgegenstand: Restaurant <br />
            UID-Nummer: ATU124738255255 <br />
            Bezirkshauptmannschaft: Bregenz <br />
            Telefon: +43 5569 25500 <br />
            Fax: +43 5569 255255255 <br />
            E-Mail: info@kantina.com
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Impressum;
