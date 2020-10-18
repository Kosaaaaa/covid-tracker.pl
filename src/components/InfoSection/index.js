import React from 'react'
import { CardHeader, CardContent } from '@material-ui/core';
import { CardStyled } from './InfoSectionElements';
const InfoSection = ({ title, p1, p2 }) => {
  return (
    <CardStyled>
      <CardHeader title={title} />
      <CardContent>
        <p>
          {p1}
        </p>
        <p>
          {p2}
        </p>
      </CardContent>
    </CardStyled>
  )
}

export default InfoSection;
