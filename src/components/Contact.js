import React from "react";
import "./Contact.css"; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Liên hệ</h2>
      <p>Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi!</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> contact@hoalan.com</p>
        <p><strong>Số điện thoại:</strong> 0123-456-789</p>
        <p><strong>Địa chỉ:</strong> 123 Đường Hoa Lan, TP.HCM</p>
      </div>

      <form className="contact-form">
        <label></label>
        <input type="text" placeholder="Nhập họ và tên..." />

        <label></label>
        <input type="email" placeholder="Nhập email..." />

        <label></label>
        <textarea placeholder="Nhập tin nhắn của bạn..." />

        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default Contact;
