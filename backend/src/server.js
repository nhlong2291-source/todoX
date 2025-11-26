// Server setup
import express from "express";
// Environment variables
import dotenv from "dotenv";
// Routes
import taskRoute from "./routes/taskRoutes.js";
// Database connection
import connectDB from "./config/db.js";
// Cấu hình biến môi trường
dotenv.config();
// Kết nối đến cơ sở dữ liệu

const app = express();
const PORT = process.env.PORT || 3000;

// Trung gian xử lý để phân tích JSON
app.use(express.json());
// Chuyển đổi dữ liệu từ form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Sử dụng routes cho nhiệm vụ
app.use("/api/tasks", taskRoute);

// Bắt đầu server sau khi kết nối DB thành công
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server bắt đầu trên cổng http://localhost:${PORT}`);
  });
});
