// backend/src/config/db.js
import mongoose from "mongoose";
// Hàm kết nối đến cơ sở dữ liệu MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Kết nối đến cơ sở dữ liệu MongoDB thành công!");
  } catch (error) {
    console.error("Lỗi kết nối đến cơ sở dữ liệu MongoDB:", error);
    process.exit(1); // Thoát ứng dụng nếu không kết nối được
  }
};
export default connectDB;
