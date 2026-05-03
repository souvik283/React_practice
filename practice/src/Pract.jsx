import React, { useState } from 'react'

const Pract = () => {

    const [name, setName] = useState("Souvik")
    const [age, setAge] = useState(20)

    const change = () =>{
        setName("Souvik Ghosh")
        setAge(21)
    }

  return (
    <div className=' m-9'>
      <h2>Name: {name} <br />
      age: {age}
      </h2>
      <button onClick={change} className=' bg-amber-600 p-2 mt-4 cursor-pointer rounded-2xl'>Change</button>
    </div>
  )
}

export default Pract
