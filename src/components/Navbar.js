import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items =useSelector((state) => state.cart);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>REDUX STORE</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/cart'>Cart</NavLink>
        </li>
      </ul>
      <span className='navbar-text'>
        Cart items: {items.length}
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar