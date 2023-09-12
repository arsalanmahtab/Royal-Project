import React, { useContext } from 'react'
import logo from '../Resources/images/logo.png';

import { Link, BrowserRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="mainNavbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <img src={logo} alt="" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">

                  <Link class="navbarcolor"  to='/'>Home</Link>

                </li>
                <li class="nav-item">

                  <Link class="navbarcolor"  to='/about'>About </Link>
                </li>


                <li class="nav-item dropdown">
                  <Link class=" navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">

                  <Link class="navbarcolor" to='/contact'>Contact</Link>

                </li>

              </ul>
              {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar