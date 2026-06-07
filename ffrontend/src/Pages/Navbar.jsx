import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='container'>
          <li className="list"><Link className="Link" to="/">Home</Link></li>
          <li className="list"><Link className="Link" to="/about">About</Link></li>
          <li className="list"><Link className="Link" to="/service">Service</Link></li>
          <li className="list"><Link className="Link" to="/contact">Contact</Link></li>
          <li className="List">
            <Link className="Link" to='/parent'>props</Link>
          </li>
          <li className="List">
            <Link className="Link" to='/useState'>useState</Link>
          </li>
          <li>
            <Link className="Link" to='/useEffect'>useEffect</Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar