import React from "react";
import { CardContent } from "@material-ui/core";
import { InfoCard, H2, InfoTotal, Title } from './InfoBoxElements';

const InfoBox = ({ title, cases, total, active, isRed, ...props }) => {
  return (
    <InfoCard active={active} isRed={isRed} onClick={props.onClick}>
      <CardContent>
        <Title color="textSecondary" gutterBottom>
          {title}
        </Title>
        <H2 isRed={isRed}>
          {cases}
        </H2>

        <InfoTotal color="textSecondary">
          {total} Razem
        </InfoTotal>
      </CardContent>
    </InfoCard >
  );
}

export default InfoBox;
