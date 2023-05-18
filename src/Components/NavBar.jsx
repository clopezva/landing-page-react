function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="mr-2" />
            Corea del Sur
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Acerca
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cultura
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Registro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar