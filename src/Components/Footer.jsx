function Footer() {
  return (
    <>
      <section className="">
        <footer className="text-center text-white">
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="call-to-action me-3">
                  ¡Suscríbete para saber más sobre Corea!
                </span>
                <button
                  type="button"
                  className="btn footer-btn btn-outline-light btn-rounded"
                >
                  Registro
                </button>
              </p>
            </section>
          </div>
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a className="text-white" href="https://github.com/clopezva">
              Carmen Lopez
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
