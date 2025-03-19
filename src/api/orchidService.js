const API_URL = "https://67d2578690e0670699bd22cc.mockapi.io/api/listofchids";

// Lấy danh sách tất cả hoa lan
export const getOrchids = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch orchids");
    return await response.json();
  } catch (error) {
    console.error("Error fetching orchids:", error);
    return [];
  }
};

// Lấy chi tiết một hoa lan theo ID
export const getOrchidById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${String(id)}`); // Ép kiểu thành chuỗi
    if (!response.ok) throw new Error("Failed to fetch orchid");
    return await response.json();
  } catch (error) {
    console.error(`Error fetching orchid with ID ${id}:`, error);
    return null;
  }
};


// Thêm hoa lan mới
export const addOrchid = async (orchid) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orchid),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding orchid:", error);
  }
};

// Cập nhật hoa lan theo ID
export const updateOrchid = async (id, updatedOrchid) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedOrchid),
    });
    return await response.json();
  } catch (error) {
    console.error(`Error updating orchid with ID ${id}:`, error);
  }
};

// Xóa hoa lan theo ID
export const deleteOrchid = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return await response.json();
  } catch (error) {
    console.error(`Error deleting orchid with ID ${id}:`, error);
  }
};
