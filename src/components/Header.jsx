const Header = () => {
  return (
    <header className="container">
      <div
        className="d-flex align-items-center justify-content-between pb-3"
        style={{ height: "100px" }}
      >
        <img
          className="img-fluid"
          style={{ width: "100px", height: "auto" }}
          src="https://cdn.worldvectorlogo.com/logos/meetup-1.svg"
          alt="meetup-logo"
        />
        <div className="position-relative" style={{width: "200px"}}>
            
          <input
            type="text"
            className="form-control"
            placeholder="Search by title and tags"
            id="searchBox"
          />
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
