import "./styles.css";

export default function CitySearch() {
  return (
    <div className="row city-search">
      <div className="alignleft">
        <h1 className="city">Bristol</h1>
        <h2 className="local-time">10:00</h2>
        <h2 className="date">Tuesday 13th June 2023</h2>
      </div>
      <div className="alignright">
        <div className="current-location-link-div"></div>
        <form className="search-bar">
          <div className="col-3 form-group">
            <input
              type="text"
              className="form-control"
              id="city-input"
              placeholder="Enter city"
            />
          </div>
          <button className="current-location-link">
            Use current location
          </button>
        </form>
        <div className="search-button">
          <button type="button" className="btn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
