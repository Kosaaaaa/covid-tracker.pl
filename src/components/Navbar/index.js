import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';
import Emoji from '../Emoji';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Corona-Tracker <Emoji label="Microbe Emoji" symbol="🦠" /> </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Statystyki</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/info">Informacje</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">O Projekcie</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
