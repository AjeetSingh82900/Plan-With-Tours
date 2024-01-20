import { useState } from "react";
export default function Card({ id, image, info, name, price, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <>
      <div className="w-[400px] max-h-max m-4 p-4 flex flex-col items-center rounded-[10px] shadow-2xl">
        <img className="w-[380px] aspect-square " src={image} alt="" />

        <div className="flex items-start">
          <h1 className="text-green-600 font-bold ">
            <span className="px-2">{`₹`}</span>
            {price}
          </h1>
          <h1 className="text-black-600 font-bold ml-5">{name}</h1>
        </div>
        <div className=" ml-5">
          {description}
          <span className="text-blue-500 " onClick={readmoreHandler}>
            {readmore ? `Show less` : "Read more"}
          </span>
        </div>
        <div className="mx-8 mt-5 flex justify-center rounded-lg w-[300px] h-[50px] bg-red-200 border-solid border-2 border-red-500   hover:bg-red-600 ">
          <button
            className=" text-black font-bold hover:text-white ml-5 "
            onClick={() => removeTour(id)}
          >
            Not interested
          </button>
        </div>
      </div>
    </>
  );
}
