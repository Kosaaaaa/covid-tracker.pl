import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import iso_countries from "i18n-iso-countries";


export const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{translateCountryName(country, "pl")}</div>
          <div className="info-confirmed">
            Zakażeni: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Wyleczeni: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Zgony: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

iso_countries.registerLocale(require("i18n-iso-countries/langs/pl.json"));
export const translateCountryName = (country, language) => {

  let countryName;
  if (country.countryInfo.iso3 === null) {
    countryName = country.country;
  }
  else {
    countryName = iso_countries.getName(country.countryInfo.iso3, language);
  }
  return countryName;
};