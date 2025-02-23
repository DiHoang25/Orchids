// src/components/PlayersContainer.js
import React, { useState } from 'react';
import PlayersList from './PlayersList';
import PlayerModal from './PlayerModal';
import ListOfPlayers from '../../data/ListOfPlayers';

const PlayersContainer = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleDetailClick = (player) => {
    console.log("Clicked on player:", player); // Debug
    setSelectedPlayer(player);
  };
  

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div>
      
      <PlayersList players={ListOfPlayers} onDetailClick={handleDetailClick} />
      {selectedPlayer && (
        <PlayerModal player={selectedPlayer} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PlayersContainer;
