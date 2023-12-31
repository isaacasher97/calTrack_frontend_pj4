import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav id="navBar" class="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><img src="https://i.imgur.com/GCGJ3ds.png" alt="logoImg"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <Link to="/" href="/"><img src="https://i.imgur.com/GCGJ3ds.png" alt="logoImg" className="offcanvas-title" id="offcanvasNavbarLabel"></img></Link>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header
