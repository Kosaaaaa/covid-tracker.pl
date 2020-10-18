import React, { useState } from 'react'
import { Typography } from '@material-ui/core';
import { SnackbarStyled, ButtonStyled } from './CookieSnackbarElement';
const CookieSnackbar = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    setSnackbarOpen(false);
  };
  return (
    <div>
      <SnackbarStyled open={snackbarOpen} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}>
        <React.Fragment>
          <Typography>Ta strona kosrzysta z plików cookies, potrzebnych do lepszego działania strony. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.</Typography>
          <ButtonStyled size="medium" onClick={handleClose}>
            OK
          </ButtonStyled>
        </React.Fragment>
      </SnackbarStyled>
    </div>
  )
}

export default CookieSnackbar
