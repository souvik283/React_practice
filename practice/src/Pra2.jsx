import { UserStar } from 'lucide-react'
import React, { useState } from 'react'

const Pra2 = () => {

    const [user, setUser] = useState({name: "souvik", age: 20})
    const [num, setNum]  = useState([10, 23, 45, 74])
    function change() {

        const newUser = {...user}
        const newNum = [...num]
        newUser.name = "Souvik Ghosh"
        newUser.age = 21
        newNum.push(69)

        setUser(newUser)
        setNum(newNum)
        
    }
  return (
    <div className="mt-2 flex flex-col w-full items-center justify-items-center">
      <p className=" text-3xl bg-gray-400 px-5 py-1 ">{user.name}, {user.age} <br /> {num}</p>
      <div>
        <button  onClick={change} className=" px-3 py-1 rounded-2xl bg-green-500 m-3 cursor-pointer">
          Increase
        </button>

      </div>
    </div>
  )
}

export default Pra2
