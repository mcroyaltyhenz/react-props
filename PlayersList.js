import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Player from './Player';
import players from '../players';

const PlayersList = () => {
  return (
    <Container>
      <h1 style={{ 
        textAlign: 'center', 
        margin: '30px 0',
        color: '#2c3e50',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        World Class Football Players
      </h1>
      <Row style={{ justifyContent: 'center' }}>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
