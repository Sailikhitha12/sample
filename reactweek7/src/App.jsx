import React from 'react'

const App = () => {
  return (
    <>
    <nav classNameNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameNameName="container-fluid">
    <a classNameNameName="navbar-brand" href="#">Navbar</a>
    <button classNameNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameNameName="nav-item">
          <a classNameNameName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classNameNameName="nav-item">
          <a classNameNameName="nav-link" href="#">Link</a>
        </li>
        <li classNameNameName="nav-item dropdown">
          <a classNameNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classNameNameName="dropdown-menu">
            <li><a classNameNameName="dropdown-item" href="#">Action</a></li>
            <li><a classNameNameName="dropdown-item" href="#">Another action</a></li>
            <li><hr classNameNameName="dropdown-divider"/></li>
            <li><a classNameNameName="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>  
        <li classNameNameName="nav-item">
          <a classNameNameName="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form classNameNameName="d-flex" role="search">
        <input classNameNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameNameName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<form>
  <div classNameName="mb-3">
    <label for="exampleInputEmail1" classNameName="form-label">Email address</label>
    <input type="email" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" classNameName="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div classNameName="mb-3">
    <label for="exampleInputPassword1" classNameName="form-label">Password</label>
    <input type="password" classNameName="form-control" id="exampleInputPassword1"/>
  </div>
  <div classNameName="mb-3 form-check">
    <input type="checkbox" classNameName="form-check-input" id="exampleCheck1"/>
    <label classNameName="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" classNameName="btn btn-primary">Submit</button>
</form>
<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>

    </>
    
  
  )
}

export default App