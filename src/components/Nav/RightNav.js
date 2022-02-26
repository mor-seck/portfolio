import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router,Link} from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  li a {
    text-decoration: none;
    color:#000000;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Router>
    <Ul open={open} >
      <li><Link to='#homme' >Home</Link></li>
      <li><Link to='#About-us' >About Us</Link></li>
      <li><Link to='#contact'>Contact Us</Link></li>
    </Ul>
    </Router>
  )
}

export default RightNav