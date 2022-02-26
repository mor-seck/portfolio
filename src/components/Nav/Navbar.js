import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from "../../../src/assets/images/logo.png"



const Nav = styled.nav`
  width          : 100%;
  padding        : 0 20px;
  display        : flex;
  justify-content: space-between;
  background: #ebebeb;
  background-size: cover;

  .logo {
    padding: 15px 0;
  }

  .logo img{
    width:40%;
  }

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={Logo} alt="logo"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar