import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

//actions
import { getGameDetails } from '../actions/gamesAction';

const Game = ({ name, released, id, image }) => {
  const dispatch = useDispatch();

  const getDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(getGameDetails(id));
  };

  return (
    <StyledGame onClick={getDetailsHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 35vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
