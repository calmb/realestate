import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {menuData } from '../data/MenuData'
import { css } from 'styled-components/macro'
import { Button } from './Button'
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
`

const NavLink = css`
 color: #fff;
 display: flex;
 align-items: center;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 text-decoration: none;
`
const Logo = styled(Link)`
 ${NavLink};
 font-weight: 700;

`
const MenuBars = styled(FaBars)`
display: none;


@media screen and (max-width: 768px) {
    display: block;
    font-size: 25px;
    cursor: pointer;
    position: abosulte;
    top: 0;
    right: 0;
    
}
`
const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: -48px;


 @media screen and (max-width: 768px) {
     display: none;
 }
`
const NavMenuLinks = styled(Link)`
${NavLink}
`
const NavBtn = styled.div`
 display: flex;
 align-items: center;
 margin-right:  24px;

 @media screen and (max-width: 768px) {
    display: none;
`

const Navbar = ({toggle}) => {
  return (
   <Nav>
      <Logo to="/">CAL ESTATE</Logo>
      <MenuBars style={{color:'#fff'}} onClick={toggle}/>
      <NavMenu>
          {menuData.map((item, index) => (
              <NavMenuLinks to={item.link} key={index}>
                  {item.title}
              </NavMenuLinks>
          ))}

      </NavMenu>
      <NavBtn>
          <Button to='/contact' primary='true'>
              Contact Us</Button>
      </NavBtn>
      
  </Nav>

  );
};

export default Navbar;
