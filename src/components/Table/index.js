import React from 'react'
import { TableWrapper, TableRow, TableCell } from './TableElements';
import numeral from "numeral";
import { translateCountryName } from '../../util';

const Table = ({ countries, isExpand }) => {

  return (
    <TableWrapper isExpand={isExpand}>
      {countries.map((country) => (
        <TableRow>
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
