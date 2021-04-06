import React from 'react';

//animations and styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt='logo' />
        <h1>Flair</h1>
      </Logo>
      <div className='search'>
        <input type='text' placeholder='Search' />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 2px solid #ff7676;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.6rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    transition: 0.3s;
  }
  button:hover {
    transform: scale(1.1);
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
    color: #ff7676;
    margin-right: 0.2rem;
  }
`;

export default Nav;
