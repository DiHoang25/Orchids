import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [orchid, setOrchid] = useState(null);

  useEffect(() => {
    const fetchOrchid = async () => {
      try {
        const response = await fetch(
          `https://67d2578690e0670699bd22cc.mockapi.io/api/listofchids/${id}`
        );
        const data = await response.json();
        setOrchid(data);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchOrchid();
  }, [id]);

  if (!orchid) return <p>Đang tải dữ liệu...</p>;

  return (
    <div>
      <h2>Chi tiết Hoa Lan</h2>
      <p><strong>Tên:</strong> {orchid.name}</p>
      <p><strong>Giá:</strong> {orchid.price} VNĐ</p>
      <p><strong>Mô tả:</strong> {orchid.description}</p>
      <img src={orchid.image} alt={orchid.name} style={{ width: '300px' }} />
    </div>
  );
};

export default Detail;
