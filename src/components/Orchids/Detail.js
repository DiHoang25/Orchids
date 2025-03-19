import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrchidById } from "../../api/orchidService";

const Detail = () => {
  const { id } = useParams();
  const [orchid, setOrchid] = useState(null);

  useEffect(() => {
    const fetchOrchid = async () => {
      const data = await getOrchidById(id);
      if (data) setOrchid(data);
    };
    fetchOrchid();
  }, [id]);

  if (!orchid) return <p>Đang tải dữ liệu...</p>;

  return (
    <div>
      <h2>Chi tiết Hoa Lan</h2>
      <p><strong>Tên:</strong> {orchid.name}</p>
      <p><strong>Giá:</strong> {orchid.price} VND</p>
    </div>
  );
};

export default Detail;
