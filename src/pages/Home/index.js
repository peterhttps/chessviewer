import React from 'react';
import Header from '../../components/Header';

import { Container, Body, Title, ContentContainer, DescriptionButtonContainer, JoinButton } from './styles';

import homeImage from '../../assets/images/homeImage.png';

function Home() {
  return (
    <Container>
        <Header window="Home" />
        <Body>
          <Title>
            Search and Study the Greatest Chess Games <br /> of All Time!
          </Title>
          <ContentContainer>
            <img src={homeImage} alt="home iamge" />
            <DescriptionButtonContainer>
              <p>With Chess Viewer you can search for the greatest games in all of chess history. Learn the best tactics from the best players such as Magnus Carlsen, Hikaru Nakamura, Garry Kasparov and many more! You can replay their matches and follow the moves from each player, learn what openings they play, how they manage difficult situations. Your favorite game is not listed? You can add the game to our database with just a few steps. Join our community now!</p>
              <JoinButton>
                Join Now!
              </JoinButton>
            </DescriptionButtonContainer>
          </ContentContainer>
        </Body>
    </Container>
  );
}

export default Home;