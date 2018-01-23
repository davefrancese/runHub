import React, { Component } from 'react';
import Location from './Location'

class Event extends Component {
  render() {
    return (
      <div className="event-list-item">
          <h1><i class="fa fa-calendar" aria-hidden="true"></i> {this.props.event.date}</h1>
          <h2><i class="fa fa-ticket" aria-hidden="true"></i> {this.props.event.name}</h2>
          <h2><i class="fa fa-road" aria-hidden="true"></i> {this.props.event.distance}</h2>
      </div>
    );
  }
}

export default Event;
