import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
      <header>
        <h1>Runhub</h1>
        <p>Finding a Run near you.</p>
      </header>
        <nav>
          <ul>
            <li><a href="#">Add Event</a></li>
            <li><a href="#">Admin Login</a></li>
          </ul>
        </nav>
    </div>
    )
  }
}

export default Header;
