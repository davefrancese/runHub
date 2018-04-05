import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home'
import EventList from './events/EventList'
import EventTemplate from './events/EventTemplate'

class index extends React.Component {
  constructor() {
    super()
    this.state = {
      events: [],
      submits: []
    }
  }

  async componentDidMount() {
    const response = await
    fetch('https://runhub-api.herokuapp.com/runhub')
    const json = await response.json()
    this.setState({events: json})

    const subresponse = await
    fetch('https://runhub-api.herokuapp.com/runhub/sub')
    const subjson = await subresponse.json()
    this.setState({submits: subjson})
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() =>
            <Home events={this.state.events}/>}/>
          <Route path='/:id' render={(props) =>
            <EventTemplate
              {...props}
              events={this.state.events}/>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default index;
