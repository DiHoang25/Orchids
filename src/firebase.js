import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1r08Cd6Hugx96g_Kgx1YtlTkepcctVZk",
  authDomain: "ordchids-9962b.firebaseapp.com",
  projectId: "ordchids-9962b",
  storageBucket: "ordchids-9962b.appspot.com",
  messagingSenderId: "935402589759",
  appId: "1:935402589759:web:7113ff71bb3ca896fa328a",
  measurementId: "G-NMWS8V2MSB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.useDeviceLanguage(); // Sử dụng ngôn ngữ hệ thống

// Đăng nhập bằng Google
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" }); // Bắt buộc chọn tài khoản mới

    console.log("Bắt đầu đăng nhập...");
    const result = await signInWithPopup(auth, provider);
    console.log("Đăng nhập thành công:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.code, error.message);
    
    if (error.code === "auth/popup-blocked") {
      alert("Trình duyệt đã chặn popup. Hãy thử lại!");
    } else if (error.code === "auth/cancelled-popup-request") {
      console.warn("Yêu cầu popup bị hủy do có nhiều yêu cầu đồng thời.");
    }
    return null;
  }
};


// Đăng xuất
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Sign-Out Error:", error);
  }
};

// Lắng nghe trạng thái người dùng
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { auth };
