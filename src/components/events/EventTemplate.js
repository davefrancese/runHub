import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header'

class EventTemplate extends React.Component {
  constructor(props) {
    super()
    this.state = {
      events: props.events
    }
  }

  render() {
    console.log(this.state.events[this.props.match.params.id]);
    return (
      <div>
        <Header />
        <h1>{this.state.events[this.props.match.params.id].name}</h1>
      </div>

    )
  }
}

export default EventTemplate;
