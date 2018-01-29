import React, { Component } from 'react';
import axios from "axios"

class SubmitEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: false
    }
  }

  handleSubmit(event) {
    let formData = new FormData(event.target);
    let submission = {
      name: formData.get('name'),
      distance: formData.get('distance'),
      state: formData.get('city-state'),
      zip: formData.get('zip'),
      website: formData.get('website'),
      date: formData.get('date'),
      contact_name: formData.get('contactName'),
      contact_email: formData.get('contactEmail'),
      contact_phone: formData.get('contactPhone'),
      isApproved: false,
      admin_username: 'brentfrancese',
      fb_page: formData.get('facebookUrl'),
      twitter: formData.get('twitter'),
      instagram: formData.get('instagram'),
      description: formData.get('description')
    }
    axios.post('https://api.mlab.com/api/1/databases/runhub/collections/submits?apiKey=LQNFoYJjzvQgMRmmhSG_tDA7DjdijDFL', submission)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="submit-event-container">
        <h1>Submit a Run Event</h1>
        <form method="post" onSubmit={this.handleSubmit}>
          <p className="input-label">Event Name</p>
          <input className="submit-input" type="text" name="name" placeholder="ex. Turkey Trot"/>
          <p className="input-label">Event Distance</p>
          <input className="submit-input" type="text" name="distance" placeholder="ex. 5k"/>
          <p className="input-label">Event Date</p>
          <input className="submit-input" type="text" name="date" placeholder="ex. January 1, 2018"/>
          <p className="input-label">Event Location / Address</p>
          <input className="submit-input" type="text" name="location" placeholder="ex. 123 Main St."/>
          <p className="input-label">Event City and State</p>
          <input className="submit-input" type="text" name="city" placeholder="ex. Raleigh, NC"/>
          <p className="input-label">Event Website</p>
          <input className="submit-input" type="text" name="website" placeholder="ex. https://www.raleighnc.gov/"/>
          <p className="input-label">Contact Name</p>
          <input className="submit-input" type="text" name="contactName"
          placeholder="ex. Jane Smith"/>
          <p className="input-label">Contact Email</p>
          <input className="submit-input" type="text" name="contactEmail" placeholder="ex. janesmith@email.com"/>
          <p className="input-label">Contact Phone</p>
          <input className="submit-input" type="text" name="contactPhone" placeholder="ex. 555-555-5555"/>
          <p className="input-label">Facebook Page URL</p>
          <input className="submit-input" type="text" name="facebookUrl" placeholder="ex. https://www.facebook.com/turkeytrot/"/>
          <p className="input-label">Event Twitter</p>
          <input className="submit-input" type="text" name="twitter" placeholder="ex. @turkeytrot"/>
          <p className="input-label">Event Instagram</p>
          <input className="submit-input" type="text" name="instagram"
          placeholder="ex. @turkeytrot"/>
          <p className="input-label">Event Description</p>
          <textarea className="submit-input textarea" type="text" name="description"></textarea>
          <br />
          <button type="submit" className="submit-button">Submit</button>
        </form>

        {/* --- CONFIRMATION --- */}

        {/* <p><a href="#">home</a></p>
        <h3>Thanks! We're reviewing the event now.</h3>
        <h4>Your event may take a few days to be added to our calendar.</h4> */}

      </div>
    );
  }
}

export default SubmitEvent;
