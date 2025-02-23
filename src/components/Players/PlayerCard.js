import React from "react";
import styles from "./Players.module.css";

const PlayerCard = ({ player, onDetailClick }) => { // Thêm onDetailClick vào props
  return (
    <div className={styles["player-card"]}>
      <img src={player.image} alt={player.name} className={styles["player-image"]} />
      <div className={styles["player-info"]}>
        <h3 className={styles["player-name"]}>{player.name}</h3>
        <p>🏆 Đánh giá: {player.rating}/5</p>
        <p>🌍 Quốc gia: {player.origin}</p>
        <p className={styles["player-club"]}>🏟️ CLB: {player.club}</p>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Chi tiết clicked:", player);
            onDetailClick(player);
          }}
          
        >
          Chi tiết
        </button>


      </div>
    </div>
  );
};

export default PlayerCard;
