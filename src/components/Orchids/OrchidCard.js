import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Orchid.css";

const OrchidCard = ({ orchid }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles["orchid-card"]}
      onClick={() => navigate(`/detail/${orchid.id}`)}
      style={{ cursor: "pointer" }}
    >
      {orchid.isSpecial && <span className={styles["special-tag"]}>Đặc biệt</span>}
      
      <img src={orchid.image} alt={orchid.name} className={styles["orchid-image"]} />
      
      <div className={styles["orchid-info"]}>
        <h3 className={styles["orchid-name"]}>{orchid.name}</h3>
        <p>🌟 Đánh giá: {orchid.rating}/5</p>
        <p>📍 Xuất xứ: {orchid.origin}</p>
        <p className={styles["orchid-type"]}>🌿 Loại: {orchid.type}</p>
      </div>
    </div>
  );
};

export default OrchidCard;
