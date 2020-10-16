import React from 'react'
import { TableWrapper, TableRow, TableCell } from './TableElements';
import numeral from "numeral";
import iso_countries from "i18n-iso-countries";

const translateCountryName = (country, language) => {
  let countryName;
  if (country.countryInfo.iso3 === null) {
    countryName = country.country;
  }
  else {
    countryName = iso_countries.getName(country.countryInfo.iso3, language);
  }
  return countryName;
};

const Table = ({ countries, isExpand }) => {
  iso_countries.registerLocale(require("i18n-iso-countries/langs/pl.json"));

  return (
    <TableWrapper isExpand={isExpand}>
      {countries.map((country) => (
        <TableRow>
          <TableCell>{translateCountryName(country, "pl")}</TableCell>
          <TableCell>
            <strong>{numeral(country.cases - country.recovered).format("0,0")}</strong>
          </TableCell>
        </TableRow>
      ))
      }
    </TableWrapper >
  )
}

export default Table
