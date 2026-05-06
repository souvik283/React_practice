import React, { useState } from "react";

const Pra3 = () => {
    const [title, setTitle] = useState('')

    function submit(e) {
        e.preventDefault()
        console.log(`form submittted by ${title}`)
        setTitle("")
    }
  return (
    <div >
      <form className="flex flex-col p-5 w-full justify-items-center items-center m-5 bg-gray-300">
        <input
          type="text"
          className="px-2 py-1 border-2"
          placeholder="Enter Your Name"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <button onClick={(e) => {
            submit(e)
        }} className="px-3 py-1 rounded-sm mt-2 bg-green-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Pra3;
