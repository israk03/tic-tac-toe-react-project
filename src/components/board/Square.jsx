export default function Square({ value }) {
  const handleClick = () => {};
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
