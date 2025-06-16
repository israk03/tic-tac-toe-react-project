import Square from "./Square";

export default function Board() {
  return (
    <>
      <h1 className="text-3xl mb-3">Winner: </h1>
      <div className="flex">
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}
