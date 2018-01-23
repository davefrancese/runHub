import React, { Component } from 'react';
import Event from './Event'
import Location from './Location'

class EventList extends Component {
  render() {
    return (
      <div className="event-list-container">
        {/* <Location /> */}
        {this.props.events.map(event =>
          <Event
            key={event.id}
            event={event}
            />) }
      </div>
    );
  }
}

export default EventList;
