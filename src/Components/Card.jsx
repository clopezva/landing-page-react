function Card(props) {
  return (
    <>
      <div className="card col-md-6 mx-auto my-3" style={{ maxWidth: "18rem" }}>
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h1 className="card-title">{props.title}</h1>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            Saber más
          </a>
        </div>
      </div>
    </>
  );
}

export default Card