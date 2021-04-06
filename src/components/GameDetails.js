import React from 'react';
import { useHistory } from 'react-router-dom';

//styles and animation
import '../font_awesome_styles.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnim, imageAnim, fadeAnim } from '../animation';

//redux
import { useSelector } from 'react-redux';

//utils
import { getSmallerImage } from '../utils';
import { useScroll } from './useScroll'

const GameDetails = ({ pathId }) => {
  const history = useHistory();
  const [element, controls] = useScroll()
  const [element2, controls2] = useScroll()

  const gameDetails = useSelector((state) => state.gameDetails);
  const { loading, details, screenshots } = gameDetails;

  const exitDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  return (
    <CardShadow className='shadow' onClick={exitDetailsHandler}>
      <Detail
        variants={fadeAnim}
        initial='hidden'
        animate='show'
        exit='exit'>
        {loading ? (
          <div className='loadingSpinner'>
            <div className='spinner'>
              <i className='fas fa-circle-notch fa-spin fa-5x'></i>
            </div>
            <div className='loadingText'>
              <h1>Loading...</h1>
            </div>
          </div>
        ) : (
          <>
            <Stats variants={titleAnim} initial='hidden' animate='show'>
              <div className='rating'>
                <h3>{details.name}</h3>
                <p>Rating: {details.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {details.platforms.map((platform) => (
                    <h3 key={platform.platform.id}>{platform.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media variants={imageAnim} initial='hidden' animate='show'>
              <img
                src={getSmallerImage(details.background_image, 1280)}
                alt={details.name}
              />
            </Media>
            <Description variants={titleAnim} animate={controls} initial='hidden' ref={element}>
              <p>{details.description_raw}</p>
            </Description>
            <Gallery variants={fadeAnim} animate={controls2} initial='show' ref={element2}>
              {screenshots.map((screenshot) => (
                <img
                  key={screenshot.id}
                  src={getSmallerImage(screenshot.image, 1280)}
                  alt='game screenshot'
                />
              ))}
            </Gallery>
          </>
        )}
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
    border-radius: 2rem;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 7.5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
  margin: 2rem 0rem;
`;

export default GameDetails;
