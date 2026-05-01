import React from 'react'

const Prat = () => {
    const print = ()=>{
        console.log("hii")
    }
    const see = (elem)=>{
        console.log(elem)
    }
  return (
    <div>
      <button onDoubleClick ={print}  className=' m-20 py-2 px-5 bg-amber-400 rounded-4xl'>click me</button>
      <input type="text" onChange={(elem) => {
        see(elem.target.value)
      }} className=' m-10 p-3 bg-gray-500' placeholder='enter your name'/>
    </div>

  )
}

export default Prat
