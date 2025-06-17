import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //   console.log(squares);
  const handleClick = () => {
    // console.log("square clicked");
    const newSquares = squares.slice();
    newSquares[0] = "X"; // For demonstration, we set the first square to "X"
    setSquares(newSquares);
  };
  return (
    <>
      <h1 className="text-3xl mb-3">Winner: </h1>
      <div className="flex">
        <div>
          <Square value={squares[0]} handleSquareClick={handleClick} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
        </div>
        <div>
          <Square value={squares[3]} />
          <Square value={squares[4]} />
          <Square value={squares[5]} />
        </div>
        <div>
          <Square value={squares[6]} />
          <Square value={squares[7]} />
          <Square value={squares[8]} />
        </div>
      </div>
    </>
  );
}
