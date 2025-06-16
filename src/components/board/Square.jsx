import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="w-24 h-24 m-1 bg-gray-200 border border-gray-400 rounded-lg text-2xl font-bold"
      >
        {value}
      </button>
    </div>
  );
}
