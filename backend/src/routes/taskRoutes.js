import express from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from "../controllers/tasksControllers.js";
const Router = express.Router();

// Lấy tất cả nhiệm vụ
Router.get("/", getAllTasks);
// Thêm nhiệm vụ mới
Router.post("/", createTask);
// Cập nhật nhiệm vụ
Router.put("/:id", updateTask);
// Xóa nhiệm vụ
Router.delete("/:id", deleteTask);
// Xuất module Router
export default Router;
