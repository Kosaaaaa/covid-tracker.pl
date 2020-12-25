import React from 'react'
import { Typography } from '@material-ui/core';
import { SnackbarStyled, ButtonStyled } from './CookieSnackbarElement';
import { useStateWithLocalStorage } from '../../hooks';
import { stringToBoolean } from '../../utils/util';
const CookieSnackbar = () => {
  const [snackbarIsOpen, setSnackbarIsOpen] = useStateWithLocalStorage('snackbarIsOpen', true);
  const handleClose = (event) => {
    setSnackbarIsOpen(false);
  };
  return (
    <div>
      <SnackbarStyled open={stringToBoolean(snackbarIsOpen)} onClose={handleClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}>
        <React.Fragment>
          <Typography>Ta strona kosrzysta z plików cookies, potrzebnych do lepszego działania strony oraz do analityki. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.</Typography>
          <ButtonStyled size="medium" onClick={handleClose}>
            OK
          </ButtonStyled>
        </React.Fragment>
      </SnackbarStyled>
    </div>
  )
}

export default CookieSnackbar
