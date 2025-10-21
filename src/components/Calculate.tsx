import { useState } from "react";

interface CalculateProps {
  length: number;
  width: number;
}

const Calculate = ({ length, width }: CalculateProps) => {
  const [Length, setLength] = useState(length);
  const [Width, setWidth] = useState(width);
  const [Result, setResult] = useState(1);

  const findArea = (length: number, width: number): void => {
    const result = setResult(length * width);
    return result;
  };

  const findPerimeter = (length: number, width: number): void => {
    const result = setResult(2 * (length + width));
    return result;
  };

  return (
    <div className=" flex flex-col mt-10 w-70 gap-4">
      <p>Result: {Result}</p>
      <input
        onChange={(e) => setLength(Number(e.target.value))}
        className="border"
        type="number"
        name=""
        id=""
        value={Length}
        placeholder="Enter Length"
      />
      <input
        onChange={(e) => setWidth(Number(e.target.value))}
        className="border"
        type="number"
        name=""
        value={Width}
        id=""
        placeholder="Enter width"
      />
      <button
        onClick={() => findArea(Length, Width)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Callculate Area
      </button>
      <button
        onClick={() => {
          findPerimeter(Length, Width);
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Calculate Perimeter
      </button>
    </div>
  );
};

export default Calculate;
