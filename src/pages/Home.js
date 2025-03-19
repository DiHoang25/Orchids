import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [orchids, setOrchids] = useState([]);
  

  useEffect(() => {
    fetch("https://67d2578690e0670699bd22cc.mockapi.io/api/listofchids")
      .then((response) => response.json())
      .then((data) => setOrchids(data))
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  return (
    <div className="home-container">
      <h2>🌿 Chào mừng đến với Orchid Paradise 🌸</h2>
      <p>Khám phá các loài hoa lan đẹp nhất của chúng tôi!</p>
      <div className="orchid-list">
        {orchids.map((orchid) => (
          <div key={orchid.id} className="orchid-card">
            <Link to={`/detail/${orchid.id}`}>
              <img src={orchid.image} alt={orchid.name} className="orchid-image" />
            </Link>
            <h3>{orchid.name}</h3>
            <p>Giá: {orchid.price} VNĐ</p>
            
            <Link to={`/detail/${orchid.id}`} className="detail-btn">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
