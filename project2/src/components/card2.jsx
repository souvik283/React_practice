import React from 'react'
import { Bookmark } from "lucide-react";
const Card2 = (props) => {
  // console.log(props.brandLogo)
  return (
    <div className='card'>
      <div className='top'>
        <img src={props.brandLogo} alt="" />
        <button>Save <Bookmark size={14}/></button>
      </div>

      <div className='center'>
        <div>
        <h3>{props.company} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div className='tag'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
        </div>
      </div>
      <div className='lower'>
        <div>
          <h2>{props.pay}</h2>
          <h4>{props.location}</h4>
        </div>
        <button>Apply now</button>
      </div>

    </div>
  )
}

export default Card2
