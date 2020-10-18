import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '@material-ui/core';
import './ButtonScroll.css';


const ButtonScroll = ({ text, variant, to, isSmooth = true, color, offset }) => {
  return (
    <Link to={to} options smooth={isSmooth} offset={-90}>
      <Button variant={variant} className={color} >
        {text}
      </Button>
    </Link>
  )
}

export default ButtonScroll;
