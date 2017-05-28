import React from 'react';
import './Construction.css';

class Construction extends React.Component {
  render() {
    return (
      <div className="constructionBody">
        <div className="name first">
            Seraphina
        </div>
          <div className="last name">
              Orsini
          </div>
        <p className="message">
            site under construction
        </p>
          <p className="message">
              check back in a week
          </p>
          <p className="message">
              or two
          </p>
          <p className="message">
              (I'm a bit of a procrastinator)
          </p>
      </div>
    );
  }
}

export default Construction;
