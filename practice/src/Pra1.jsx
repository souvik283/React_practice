import React, { useState } from "react";

const Pra1 = () => {
  
  const [size, setSize] = useState(20)

 async function increase() {
  await setSize(30)
   await console.log(size)

  }
    function decrease() {
    if(size>10){
      setSize(size-1)
    }
  }

  return (
    <div className="mt-2 flex flex-col w-full items-center justify-items-center">
      <p style={{fontSize: `${size}px`}} className=" bg-gray-400 px-5 py-1 ">Souvik</p>
      <div>
        <button  onClick={increase} className=" px-3 py-1 rounded-2xl bg-green-500 m-3 cursor-pointer">
          Increase
        </button>
        <button onMouseMove={decrease} className=" px-3 py-1 rounded-2xl bg-red-600 m-3 cursor-pointer">
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Pra1;
