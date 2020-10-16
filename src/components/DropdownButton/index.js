import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Wrapper, Button } from './DropdownButtonElement';
const DropdownButton = ({ toggle }) => {
  return (
    <Wrapper >
      <Button onClick={toggle} aria-label="Rozwiń">
        <ArrowDownwardIcon />
      </Button>
    </Wrapper>
  )
}

export default DropdownButton
