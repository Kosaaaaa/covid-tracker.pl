import React from "react";
import { CardContent } from "@material-ui/core";
import { InfoCard, H2, InfoTotal, Title, InfoPrecise } from './InfoBoxElements';

const InfoBox = ({ title, cases, total, active, isred, casesPrecisely, ...props }) => {
  return (
    <InfoCard active={active} isred={isred ? 1 : 0} onClick={props.onClick}>
      <CardContent>
        <Title color="textSecondary" gutterBottom>
          {title}
        </Title>
        <div>
          <H2 isred={isred ? 1 : 0}>
            {cases}
          </H2>
          <InfoPrecise isred={isred ? 1 : 0}>
            +{casesPrecisely ? casesPrecisely : 0}
          </InfoPrecise>
        </div>
        <InfoTotal color="textSecondary">
          {total} Razem
        </InfoTotal>
      </CardContent>
    </InfoCard >
  );
}

export default InfoBox;
