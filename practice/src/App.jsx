import React from 'react';

import Card from './components/card'

const App = () => {
  return (
    <>
    <div className='card'>
      <h2>Souvik Ghosh</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae.</p>
    </div>
    <div className='card'>
      <h2>Souvik Ghosh</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repudiandae.</p>
    </div>
    <div className='card'>
      {Card()}
          </div>
    </>
  )
}

export default App
