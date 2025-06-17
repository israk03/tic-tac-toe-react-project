import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  //   console.log(squares);
  const handleClick = (i) => {
    // console.log("square clicked");
    const newSquares = squares.slice();
    // newSquares[i] = "X"; // For demonstration, we set the first square to "X"
    if (squares[i]) {
      return; // Ignore click if square is already filled
    }
    if (isXNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };
  return (
    <>
      <h1 className="text-3xl mb-3">Winner: </h1>
      <div className="flex">
        <div>
          <Square value={squares[0]} handleSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} handleSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} handleSquareClick={() => handleClick(2)} />
        </div>
        <div>
          <Square value={squares[3]} handleSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} handleSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} handleSquareClick={() => handleClick(5)} />
        </div>
        <div>
          <Square value={squares[6]} handleSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} handleSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} handleSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
