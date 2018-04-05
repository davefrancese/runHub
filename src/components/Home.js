import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header'
import EventList from './events/EventList'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <EventList events={this.props.events}/>
      </div>
    )
  }
}

export default Home;
