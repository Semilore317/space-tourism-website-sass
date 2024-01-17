import React from 'react'
import Logo from './logo192.png'
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <header>
        <nav className='nav'>
             <div className="logo">
                <img src={Logo} alt="Logo" className='logo-img'/>
             </div>
             <ul>
              <li>
                <Link to='/'>00 Home</Link>
              </li>
              <li>
                <Link to='/destination'>02 Destination</Link>
              </li>
              <li>
                <Link to='./crew'>03 Crew</Link>
              </li>
              <li>
                <Link to='./technology'>04 Technology</Link>
              </li>
              <li>
                <Link></Link>
              </li>
             </ul>
             <div className="burger">
              <img src={burgerIcon} alt="" />
             </div>
        </nav>
    </header>
  )
}

export default Nav;