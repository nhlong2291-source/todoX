import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50 dark:bg-slate-900 p-4">
      {/* Hình ảnh */}
      <img
        src="404 not found.jpg"
        alt="404 Not Found"
        className="max-w-full w-80 md:w-96 mb-6 drop-shadow-lg"
      />
      {/* Tiêu đề lỗi */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 dark:text-red-400 mb-2">
        404 - KHÔNG TÌM THẤY
      </h1>
      {/* Thông báo */}
      <p className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
        Bạn đang đi vào vùng cấm địa!
      </p>
      {/* Nút Quay về */}
      <a
        href="/"
        className="inline-block px-8 py-3 mt-4 text-sm font-bold text-white transition duration-300 transform bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-xl shadow-indigo-600/40 hover:scale-105"
      >
        QUAY VỀ TRANG CHỦ
      </a>
      Page Not Found
    </div>
  );
};

export default NotFound;
