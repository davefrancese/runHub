import React, { Component } from 'react';

class Location extends Component {

  render() {
    return (
      <div className="location-container">
        <form>
          <p>Enter your city and state<br /> to find events near you.</p>
          <input className="location-input submit-input" type="text" placeholder="ex. Raleigh, NC"/>
          {/* <p>Enter your state</p> */}
          {/* <input className="location-input submit-input" type="text" placeholder=""/> */}
          <br />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Location;
