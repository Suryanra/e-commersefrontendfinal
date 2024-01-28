import React from 'react'
import { HashLink} from 'react-router-hash-link';
const Banner = () => {
  return (
    <div className='Banner'>
      <div className='text'>
            <b>YOUR STYLE - YOUR ATTITUDE</b>
            <br></br>
      <b>Select your unique style</b>
      </div>
      <HashLink smooth to='#cardid'>
      <div className='btn'>
            Take A Look
      <div className='btnclassforbg' id='cardid'></div>
      </div>
      </HashLink>
      
    </div>
  )
}

export default Banner
