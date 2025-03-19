import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OrchidList = () => {
  const [orchids, setOrchids] = useState([]);

  useEffect(() => {
    fetch("https://67d2578690e0670699bd22cc.mockapi.io/api/listofchids")
      .then((response) => response.json())
      .then((data) => setOrchids(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Danh sách Hoa Lan</h2>
      <div className="row">
        {orchids.map((orchid) => (
          <div key={orchid.id} className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <img
                src={orchid.image}
                className="card-img-top"
                alt={orchid.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{orchid.name}</h5>
                <p className="card-text">{orchid.description}</p>
                <button className="btn btn-primary">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrchidList;
