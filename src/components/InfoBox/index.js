import React from "react";
import { CardContent } from "@material-ui/core";
import { InfoCard, H2, InfoTotal, Title } from './InfoBoxElements';

const InfoBox = ({ title, cases, total, active, isred, ...props }) => {
  return (
    <InfoCard active={active} isred={isred} onClick={props.onClick}>
      <CardContent>
        <Title color="textSecondary" gutterBottom>
          {title}
        </Title>
        <H2 isred={isred}>
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
