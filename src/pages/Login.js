import React from "react";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  const handleLogin = async () => {
    try {
      console.log("Bắt đầu đăng nhập...");
      const user = await signInWithGoogle();
      if (user) {
        alert(`Chào mừng ${user.displayName}`);
      } else {
        alert("Đăng nhập thất bại! Hãy kiểm tra console.");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error.code, error.message);
      alert(`Lỗi: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <button onClick={handleLogin}>Đăng nhập bằng Google</button>
    </div>
  );
};

export default Login;
