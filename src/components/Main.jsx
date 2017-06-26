import React from 'react';
import {Link, withRouter} from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div id="home-container">
        <div id="home-image">
          <div id="glass-effect">
          </div>
          <div id="title-container">
            <h2>Welcome to<br></br>
            <strong>Santorini</strong>
            </h2>
            <div id="weather-container">
            <div id="weather-icon"></div>
            </div>
          </div>
        </div>
        <div id="main-info-container">
          <h1>Santorini</h1>
          <div id="main-info">
            <p>Santorini holds a global standard as one of the most unique and beautiful holiday locations in the world.  From the breathtaking views to the heavenly amenities provided in the luxury resorts scattered across the clif faces, Santorini is the jewel that everyone deserves to experience.</p><br></br>
            <p>The most enticing prospect of this otherworldly locale is the fact that Santorini offers something for everyone.  Family vacations, honeymoons, retreats, or just some badly-needed personal time; no matter what the occasion, you will find exactly what you desire here on the edge of the Mediterrean.</p><br></br>
            <p>Feel free to explore all that the wonderful island of Santorini has to offer, and don't hesitate to contact us with any questions.</p><br></br>
            <br></br>
          </div>
          <div id="checkout-beaches-container">
            <h3 id="checkout-beaches-title">Check out our beaches!</h3>
            <br></br>
            <Link to="/beaches"><div id="checkout-beaches-button"></div></Link>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    );
  }


}

export default withRouter(Main);
