import React, { Component } from 'react';
import SubEvent from './SubEvent'

class SubEventList extends Component {
  render() {
    return (
      <div className="subevent-list-container">
        <h1>Submitted Events</h1>
        {/* {this.props.submits.map(submit =>
          <SubEvent
            key={submit.id}
            submit={submit}
            />) } */}

        <h3 className="all-done">Whad'ya Know! You're all caught up!</h3>
        <h4 className="view-events"><a href="#">View Events</a></h4>

      </div>
    );
  }
}

export default SubEventList;
