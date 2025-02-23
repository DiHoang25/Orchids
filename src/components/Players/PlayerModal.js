import React from "react";
import "./PlayerModal.css";

const PlayerModal = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{player.name}</h2>
        <img src={player.image} alt={player.name} className="modal-image" />
        <p><strong>Vị trí:</strong> {player.position}</p>
        <p><strong>Bàn thắng:</strong> {player.numberOfGoals}</p>
        <p><strong>Quốc gia:</strong> {player.origin}</p>
        <p><strong>CLB:</strong> {player.club}</p>
        <button className="modal-close-btn" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
};

export default PlayerModal;
