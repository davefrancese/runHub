import React, { Component } from 'react';

class Location extends Component {

  render() {
    return (
      <div className="location-container">
        <form>
          <p>Enter your city</p>
          <input className="location-input submit-input" type="text" placeholder="ex. Raleigh"/>
          <p>Enter your state</p>
          <input className="location-input submit-input" type="text" placeholder="ex. North Carolina"/>
          <br />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Location;
