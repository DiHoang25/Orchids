import React from "react";
import { Link } from "react-router-dom";
import ListOfOrchids from "../../data/ListOfOrchids";
import "./OrchidContainer.css";

const OrchidContainer = () => {
  return (
    <div className="orchid-container">
      {ListOfOrchids.map((orchid) => (
        <Link to={`/detail/${orchid.id}`} key={orchid.id} className="orchid-card">
          
          {orchid.isSpecial && <div className="orchid-label">ĐẶC BIỆT</div>}

          <img
            src={orchid.image}
            alt={orchid.name}
            className="orchid-image"
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />

          <h3>{orchid.name}</h3>
          <p><strong>Màu sắc:</strong> {orchid.color}</p>
          <p><strong>Nguồn gốc:</strong> {orchid.origin}</p>
        </Link>
      ))}
    </div>
  );
};

export default OrchidContainer;
