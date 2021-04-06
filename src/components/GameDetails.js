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
import { useScroll } from './useScroll';

//IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

//Star Images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetails = ({ pathId }) => {
  //initing functions
  const history = useHistory();
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  //fetching data from store
  const gameDetails = useSelector((state) => state.gameDetails);
  const { loading, details, screenshots } = gameDetails;

  //handlers and other functions
  const exitDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };
  const getPlatformImages = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(details.rating)
    for(let i = 1; i <= 5; i++){
      if(i <= rating) stars.push(<img alt='star' key={i} src={starFull} />)
      else stars.push(<img alt='star' key={i} src={starEmpty} />)
    }
    return stars
  }

  return (
    <CardShadow className='shadow' onClick={exitDetailsHandler}>
      <Detail variants={fadeAnim} initial='hidden' animate='show' exit='exit'>
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
                <p>Rating:  {getStars()}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {details.platforms.map((platform) => (
                    <img
                      key={platform.platform.id}
                      src={getPlatformImages(platform.platform.name)}
                      alt={platform.platform.name}
                    />
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
            <Description
              variants={titleAnim}
              animate={controls}
              initial='hidden'
              ref={element}>
              <p>{details.description_raw}</p>
            </Description>
            <Gallery
              variants={fadeAnim}
              animate={controls2}
              initial='show'
              ref={element2}>
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
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
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
