import React from "react";

function Highlight({ icon, title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <div className="text-gray-800">{icon}</div>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-xl">{value || "Loading..."}</p>
      </div>
    </div>
  );
}

export default Highlight;
