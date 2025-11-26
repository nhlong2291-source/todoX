import Task from "../models/Task.js";

// Lấy tất cả nhiệm vụ
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Lỗi khi lấy nhiệm vụ:", error);
    res.status(500).json({ message: "Lỗi khi lấy nhiệm vụ" });
  }
};

// Thêm nhiệm vụ mới
export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = new Task({ title });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error("Lỗi khi tạo createTask", error);
    res.status(500).json({ message: "Lỗi khi tạo nhiệm vụ" });
  }
};

// Cập nhật nhiệm vụ
export const updateTask = async (req, res) => {
  try {
    const { title, status, completedAt } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        status,
        completedAt,
      },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Nhiệm vụ không tồn tại" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Lỗi khi updatedTask", error);
    res.status(500).json({ message: "Lỗi khi cập nhật nhiệm vụ" });
  }
};
// Xóa nhiệm vụ
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Nhiệm vụ không tồn tại" });
    }
    res.status(200).json({ message: "Nhiệm vụ đã được xóa" });
  } catch (error) {
    console.error("Lỗi khi xóa nhiệm vụ", error);
    res.status(500).json({ message: "Lỗi khi xóa nhiệm vụ" });
  }
};
