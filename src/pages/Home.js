import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

//styling and animation
import '../font_awesome_styles.css'
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  return (
    <>
      {loading || upcomingLoading || newLoading ? (
        <div className="loadingSpinner">
          <div className="spinner">
          <i className='fas fa-circle-notch fa-spin fa-5x'></i>
          </div>
          <div className="loadingText">
            <h1>Loading...</h1>
          </div>
        </div>
      ) : (
        <GameList>
          {pathId && <GameDetails />}
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
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
