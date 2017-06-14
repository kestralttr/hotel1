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
          <div className="nav-link"><Link to="/reservations">Reservations</Link></div>
          <div className="nav-link"><Link to="/contactus">Contact Us</Link></div>
        </div>
      </div>
    );
  }

}

export default withRouter(Nav);
