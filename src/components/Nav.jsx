import React from 'react';
import {Link, withRouter} from "react-router-dom";

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div id="navbar">
        <div id="link-container">
          <div id="home-link"><Link to="/">Home</Link></div>
          <div className="nav-link"><Link to="/beaches">Beaches</Link></div>
          <div className="nav-link"><Link to="/fooddrink">Food & Drink</Link></div>
          <div className="nav-link"><Link to="/reservations">Travel</Link></div>
          <div className="nav-link"><Link to="/contact">Contact</Link></div>
        </div>
      </div>
    );
  }

}

export default withRouter(Nav);
