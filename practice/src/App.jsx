import React from 'react'
import Button from './components/button/button'
import Navbar from './components/navbar/Navbar'
import "tailwindcss"

const App = () => {
  // return (
  //   <div className='bg-blue-500 py-3 border-4 border-violet-600 rounded-2xl mx-9 my-4'>
  //     <h2 className=' text-center font-mono font-extrabold'>Souvik Ghosh</h2>
  //   </div>
  // )

  return (
    <div className='flex flex-col space-y-7'>
      <div className=' grid grid-cols-3 justify-items-center h-13 m-4'>
        <div className=' bg-blue-400 rounded-full w-12 h-12 '></div>
        <div className=' bg-yellow-300 rounded-full w-12 h-12'></div>
        <div className=' bg-green-300 rounded-full w-12 h-12'></div>
      </div>

      <div className=' flex justify-around items-center h-13 m-4'>
        <div className=' bg-green-400 rounded-full h-12 w-12'></div>
        <div className=' bg-blue-500 rounded-full h-12 w-12'></div>
        <div className=' bg-yellow-400 rounded-full h-12 w-12'></div>

      </div>

      <div className=' flex justify-around items-center h-13 m-4'>
        <div className=' bg-green-500 rounded-full h-12 w-12'></div>
        <div className=' bg-blue-600 rounded-full h-12 w-12'></div>
        <div className=' bg-yellow-500 rounded-full h-12 w-12'></div>
      </div>
      <div class="max-[600px]:bg-sky-300 min-[320px]:text-center">
  hello
</div>
    </div>
  )
}

export default App
