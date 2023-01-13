import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-gray-100 h-screen"></div>
      <div className="p-5">
        <div className="bg-gray-100 h-12"></div>
        <div className="bg-gray-100 h-48 mt-3"></div>
        <div className="bg-gray-100 h-12 mt-3"></div>
      </div>
    </div>
  );
};

export default loading;
