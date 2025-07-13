import React from 'react';
import { Card, Image, ListGroup } from 'react-bootstrap';

const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/150"
}) => {
  return (
    <Card style={{ 
      width: '18rem', 
      margin: '15px', 
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    }}
    className="player-card">
      <Image 
        src={imageUrl} 
        alt={name}
        style={{ height: '250px', objectFit: 'cover' }}
        className="player-image"
      />
      <Card.Body>
        <Card.Title style={{ color: '#2c3e50', fontWeight: 'bold' }}>{name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: '500' }}>Team:</span>
            <span>{team}</span>
          </ListGroup.Item>
          <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: '500' }}>Nationality:</span>
            <span>{nationality}</span>
          </ListGroup.Item>
          <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: '500' }}>Jersey Number:</span>
            <span style={{ 
              backgroundColor: '#3498db', 
              color: 'white', 
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {jerseyNumber}
            </span>
          </ListGroup.Item>
          <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: '500' }}>Age:</span>
            <span>{age}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Player;
