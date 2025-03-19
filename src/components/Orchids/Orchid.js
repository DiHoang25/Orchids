import React, { useState } from "react";
import ListOfOrchids from "./ListOfOrchids";

const Orchids = () => {
    const [selectedOrchid, setSelectedOrchid] = useState(null);

    // Xử lý khi nháy đúp chuột vào ảnh
    const handleDoubleClick = (orchid) => {
        setSelectedOrchid(orchid);
    };

    // Đóng modal
    const closeModal = () => {
        setSelectedOrchid(null);
    };

    return (
        <div className="grid grid-cols-4 gap-6 p-6">
            {ListOfOrchids.map((orchid) => (
                <div key={orchid.id} className="relative group">
                    <img
                        src={orchid.image}
                        alt={orchid.name}
                        className="w-full h-48 object-cover rounded-xl transition-transform transform group-hover:scale-110 cursor-pointer"
                        onDoubleClick={() => handleDoubleClick(orchid)}
                    />
                    <p className="text-center font-semibold mt-2">{orchid.name}</p>
                </div>
            ))}

            {/* Modal hiển thị chi tiết hoa lan */}
            {selectedOrchid && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold text-center">{selectedOrchid.name}</h2>
                        <img
                            src={selectedOrchid.image}
                            alt={selectedOrchid.name}
                            className="w-full h-48 object-cover rounded-lg mt-2"
                        />
                        <p className="mt-3"><strong>Màu sắc:</strong> {selectedOrchid.color}</p>
                        <p><strong>Nguồn gốc:</strong> {selectedOrchid.origin}</p>
                        <p><strong>Môi trường sống:</strong> {selectedOrchid.habitat}</p>
                        <p><strong>Độ quý hiếm:</strong> {selectedOrchid.rareLevel}</p>
                        <button
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                            onClick={closeModal}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orchids;
