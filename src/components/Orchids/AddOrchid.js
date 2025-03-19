import React, { useState } from "react";
import { addOrchid } from "../../api/orchidService";
import { useNavigate } from "react-router-dom";

const AddOrchid = () => {
  const [orchid, setOrchid] = useState({ name: "", price: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOrchid({ ...orchid, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addOrchid(orchid);
    navigate("/");
  };

  return (
    <div>
      <h2>Thêm Hoa Lan</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Tên" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Giá" onChange={handleChange} required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default AddOrchid;
