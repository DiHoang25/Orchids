import React, { useEffect, useState } from "react";
import { getOrchidById, updateOrchid } from "../../api/orchidService";
import { useNavigate, useParams } from "react-router-dom";

const EditOrchid = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [orchid, setOrchid] = useState({ name: "", price: "" });

  useEffect(() => {
    const fetchOrchid = async () => {
      const data = await getOrchidById(id);
      if (data) setOrchid(data);
    };
    fetchOrchid();
  }, [id]);

  const handleChange = (e) => {
    setOrchid({ ...orchid, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateOrchid(id, orchid);
    navigate("/");
  };

  return (
    <div>
      <h2>Chỉnh sửa Hoa Lan</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={orchid.name} onChange={handleChange} required />
        <input type="number" name="price" value={orchid.price} onChange={handleChange} required />
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
};

export default EditOrchid;
