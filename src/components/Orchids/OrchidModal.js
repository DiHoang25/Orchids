import React from "react";
import "./OrchidModal.css";

const OrchidModal = ({ orchid, onClose }) => {
  if (!orchid) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{orchid.name}</h2>
        <img src={orchid.image} alt={orchid.name} className="modal-image" />
        <p><strong>Màu sắc:</strong> {orchid.color}</p>
        <p><strong>Nguồn gốc:</strong> {orchid.origin}</p>
        <p><strong>Môi trường sống:</strong> {orchid.habitat}</p>
        <button className="modal-close-btn" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
};

export default OrchidModal;
