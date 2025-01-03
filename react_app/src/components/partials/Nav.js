

const Nav = ()=>{

  return(
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Nav;