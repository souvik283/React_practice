import React from 'react'
import Card from './components/card'
import Card2 from './components/card2'

import Jobs from './job'

const App = () => {
  return (
    <div className='parent'>
    {Jobs.map(function (elem, idx) {
      // console.log(elem);
      // return <Card2 company={elem.pay}/>
      return <div key={idx}>
      <Card2 brandLogo={elem.brandLogo} company = {elem.company} datePosted = {elem.datePosted} post = {elem.post} tag1= {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location= {elem.location} />
    </div>
    })}

    </div>
  )
}

export default App
