import React, { useContext } from "react";
import { FontContext } from "../components/FontContext";

const Maatje = () => {
  const [fontSize] = useContext(FontContext);

  return (
    <div className="maatje" style={{ fontSize: `${fontSize}px` }}>
      <div className="textMaatje">
        <h1>Iedere maand een stapel favoriete boeken, cd’s of films thuis?</h1>
        <img
          src="https://www.oba.nl/dam/nieuws/0418_oba-maatje_mauritsdame.jpg.rendition.384.614.jpeg"
          alt="vrouw en vrijwilliger kijken samen naar een boek in een woonkamer"
          className="imgMaatje"
        />
        <p>
          Zou u het fijn vinden om iedere maand een eigen vertrouwde
          vrijwilliger thuis te ontvangen, die een stapel fijne boeken, films,
          cd’s of luisterboeken uit de OBA voor u meebrengt?{" "}
        </p>
        <h2>Dan is OBA Maatje iets voor u!</h2>
        <p>
          U maakt kennis met een OBA Maatje-vrijwilliger. Klikt het, dan komt uw
          eigen vertrouwde OBA Maatje eens per maand gezellig langs en brengt
          een pakket mee dat is samengesteld volgens uw wensen.
        </p>
        <h2>Hoe werkt het?</h2>
        <p>
          Als OBA-lid kunt u zich aanmelden door een mail met uw naam, adres en
          telefoonnummer te sturen naar
          <a href="mailto: obamaatje@oba.nl"> obamaatje@oba.nl </a>. U kunt ook
          bellen naar 020 - 52 30 900. Een medewerker van de OBA neemt dan
          contact met u op om een afspraak te maken voor een intakegesprek.
        </p>
        <h2>Bent u nog geen OBA-lid?</h2>
        <p>Schrijf u dan eerst in:</p>
        <a
          href="https://www.oba.nl/service/word-lid.html"
          className="anchorMaatje"
        >
          <p>ga naar het inschrijfformulier</p>
        </a>
      </div>
    </div>
  );
};

export default Maatje;
