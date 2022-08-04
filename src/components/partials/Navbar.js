import React from 'react'

function Navbar() {
  return (
    <div>
        <nav>
        <div class="container">
  <h2 >Logiciel</h2>

  <ul class="nav nav-pills" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#menu1">Operating Systems</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#menu2">Graphic Design</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#menu2">Development</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#menu2">3D CAD</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="pill" href="#menu2">Antivirus</a>
    </li>
  </ul>

                
        <form action=" ">
            <div className="form-group my-2">
                <label htmlFor="search"></label>
                <input placeholder='Search ...' id="search" type="text" className="form-control" />
                </div>
                <button type="button" class="btn btn-outline-secondary">Search</button>
        </form>
      
            </div>
        </nav>
    </div>
  )
}

export default Navbar