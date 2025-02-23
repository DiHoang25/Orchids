import React from "react";
import PlayerCard from "./PlayerCard";
import styles from "./Players.module.css";

const PlayersList = ({ players, onDetailClick }) => {
  console.log("onDetailClick function:", onDetailClick); // Kiểm tra hàm có được truyền không

  return (
    <div className={styles["players-list"]}>
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} onDetailClick={onDetailClick} />
      ))}
    </div>
  );
};


export default PlayersList;
