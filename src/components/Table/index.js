import React from 'react'
import { TableWrapper, TableRow, TableCell } from './TableElements';
import numeral from "numeral";
import { translateCountryName } from '../../util';

const Table = ({ countries, isexpand }) => {

  return (
    <TableWrapper isexpand={isexpand}>
      {countries.map((country, index) => (
        <TableRow key={index}>
          <TableCell>{translateCountryName(country, "pl")}</TableCell>
          <TableCell>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </TableCell>
        </TableRow>
      ))
      }
    </TableWrapper >
  )
}

export default Table
