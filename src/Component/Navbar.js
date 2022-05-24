import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand">EBUS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <Link className='nav-item nav-link active' to='/'>ADD BUSS </Link>
    <Link className='nav-item nav-link active' to='/search'>SEARCH BUSS </Link>
    <Link className='nav-item nav-link active' to='/view'>VIEW BUS</Link>
    
      <a class="nav-item nav-link active" >ADD BUSS </a>
      <a class="nav-item nav-link active" >SEARCH BUS</a>
      <a class="nav-item nav-link active">VIEW BUS</a>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar