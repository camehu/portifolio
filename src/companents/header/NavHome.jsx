/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

function NavHome() {
  return (
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <Link className="navbar-brand" to={"/"}><h2>Carlos Humberto</h2></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
         
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={"/frontend"}>Front-End</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={"/backend"}>Back-End</Link>
        </li>

        <li class="nav-item directionLink">
        <Link className="nav-link" to={"#"}>Sign-in</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   
  )
}

export default NavHome
