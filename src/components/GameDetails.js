import React from 'react';

//styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

//redux
import { useSelector } from 'react-redux';

const GameDetails = () => {
  const gameDetails = useSelector((state) => state.gameDetails);
  const { details, screenshots } = gameDetails;

  return (
    <CardShadow>
      <Detail>
        <Stats>
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
        <Media>
          <img src={details.background_image} alt={details.name} />
        </Media>
        <Description>
          <p>{details.description_raw}</p>
        </Description>
        <Gallery>
          {screenshots.map((screenshot) => (
            <img
              key={screenshot.id}
              src={screenshot.image}
              alt='game screenshot'
            />
          ))}
        </Gallery>
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
    img{
        width: 100%;
    }
`

const Description = styled(motion.div)` 
    margin: 5rem 0rem;
`

const Gallery = styled(motion.div)` 
    margin: 2rem 0rem;
`

export default GameDetails;
