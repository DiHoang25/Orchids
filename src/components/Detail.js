import React from "react";
import { useParams } from "react-router-dom";
import ListOfOrchids from "../data/ListOfOrchids"; 

import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const orchid = ListOfOrchids.find((item) => item.id === id);

  if (!orchid) {
    return <h2>Không tìm thấy loài hoa này!</h2>;
  }

  return (
    <div className="detail-container">
      <h2>{orchid.name}</h2>
      <img src={orchid.image} alt={orchid.name} className="detail-image" />
      <p><strong>Màu sắc:</strong> {orchid.color}</p>
      <p><strong>Loại:</strong> {orchid.type || "Chưa có thông tin"}</p>
      <p><strong>Nguồn gốc:</strong> {orchid.origin}</p>
      <p><strong>Môi trường sống:</strong> {orchid.habitat}</p>
      <p><strong>Độ quý hiếm:</strong> {orchid.rareLevel || "Không xác định"}</p>
    </div>
  );
};

export default Detail;
