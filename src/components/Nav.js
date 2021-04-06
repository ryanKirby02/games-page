import React, { useState } from 'react';

//animations and styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

//redux and routes
import { getSearchedGames } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  //utils
  const dispatch = useDispatch();

  //state
  const [userInput, setUserInput] = useState('');

  //handlers and functions
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getSearchedGames(userInput));
    setUserInput('')
  };
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt='logo' />
        <h1>Flair</h1>
      </Logo>
      <form className='search'>
        <input
          value={userInput}
          type='text'
          placeholder='Search'
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type='submit' onClick={searchSubmitHandler}>
          Search
        </button>
      </form>
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
    outline: none;
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
