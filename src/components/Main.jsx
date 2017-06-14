import React from 'react';

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
      </div>
    );
  }


}

export default Main;
