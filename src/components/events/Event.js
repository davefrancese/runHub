import React, { Component } from 'react';
import Location from './Location'

class Event extends Component {
  render() {
    console.log(this.props.events[0].name)
    return (
      <div className="event-container">
        <Location />
        <h1>{this.props.events[0].name}</h1>
      </div>
    );
  }
}

export default Event;
