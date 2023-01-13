import React from "react";

const loading = () => {
  const placeholder = [...Array(8)];
  return (
    <div className="grid grid-cols-4 gap-5 p-5 overflow-y-auto">
      {placeholder.map((e, idx) => (
        <div key={idx} className="bg-gray-300 rounded h-96"></div>
      ))}
    </div>
  );
};

export default loading;
