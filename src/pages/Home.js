import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

//styling and animation
import '../font_awesome_styles.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation, fadeAnim } from '../animation';
import { useScroll } from '../components/useScroll';

//action imports
import {
  getPopularGames,
  getUpcomingGames,
  getNewGames,
} from '../actions/gamesAction';

//component imports
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';

const Home = () => {
  const dispatch = useDispatch();
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  //handlers and functions
  const goBackHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'GO_BACK',
    });
  };

  useEffect(() => {
    dispatch(getPopularGames());
    dispatch(getUpcomingGames());
    dispatch(getNewGames());
  }, [dispatch]);

  //pulling data out of the store
  const popularGames = useSelector((state) => state.popularGames);
  const { loading, popularList } = popularGames;

  const upcomingGames = useSelector((state) => state.upcomingGames);
  const { loading: upcomingLoading, upcomingList } = upcomingGames;

  const newGames = useSelector((state) => state.newGames);
  const { loading: newLoading, newList } = newGames;

  const searchGame = useSelector((state) => state.searchGame);
  const { loading: searchLoading, searchedGames } = searchGame;

  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  return (
    <>
      {loading || upcomingLoading || newLoading || searchLoading ? (
        <div className='loadingSpinner'>
          <div className='spinner'>
            <i className='fas fa-circle-notch fa-spin fa-5x'></i>
          </div>
          <div className='loadingText'>
            <h1>Loading...</h1>
          </div>
        </div>
      ) : !searchedGames.length ? (
        <GameList
          variants={pageAnimation}
          initial='hidden'
          animate='show'>
          {pathId && (
            <GameDetails
              variants={pageAnimation}
              initial='hidden'
              animate='show'
              exit='exit'
              pathId={pathId}
            />
          )}
          <motion.div>
            <h2>
              <span>Upcoming</span> Games
            </h2>
            <Games>
              {upcomingList.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </motion.div>
          <motion.div
            variants={fadeAnim}
            animate={controls}
            initial='hidden'
            ref={element}>
            <h2>
              <span>Popular</span> Games
            </h2>
            <Games>
              {popularList.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </motion.div>
          <motion.div
            variants={fadeAnim}
            animate={controls2}
            initial='hidden'
            ref={element2}>
            <h2>
              <span>New</span> Games
            </h2>
            <Games>
              {newList.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </motion.div>
        </GameList>
      ) : (
        <GameList
          variants={pageAnimation}
          initial='hidden'
          animate='show'
          exit='exit'>
          {pathId && (
            <GameDetails
              variants={pageAnimation}
              initial='hidden'
              animate='show'
              exit='exit'
              pathId={pathId}
            />
          )}
          <motion.div>
            <button onClick={goBackHandler} type='submit'>
              Back
            </button>

            <Header>
              <h2>
                <span>Searched</span> Games
              </h2>
            </Header>
            <Games>
              {searchedGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </motion.div>
        </GameList>
      )}
    </>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  button {
    border-radius: 1.5rem;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
    outline: none;
    transition: 0.2s;
  }
  button:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const Header = styled.div`
  display: flex;
`;

export default Home;
