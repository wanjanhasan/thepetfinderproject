import React from 'react'
import './header.css'
import puppy from '../../assets/pup.jpg'

const Header = () => {
  return (
    <div className='fithusiast__header section__padding' id='home'>
        <div className='fithusiast__header-content'>
          <h1 className='gradient__text'>Help A Pet to Find A Place to Call Home</h1>


          <p><strong>The Pet Finder Project</strong> brings the pet providers and the pet adopters together with the goal to provide a home to every animal.</p>
        </div>

        <div className='fithusiast__header-image'>
          <img src={puppy} alt='A little puppy' />
        </div>
    </div>
  )
}

export default Header