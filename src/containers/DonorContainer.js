import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="donor-container">
        <div className="donor-container--header">
          <div className="donor-container--header__avatar">

          </div>
          <div className="donor-container--header__name">

          </div>
          <div className="donor-container--header__switch">

          </div>
        </div>
        <div className="donor-container--main">
          {/*if isNew || isBeingModerated*/}
          <div className="donor-container--main__placeholder">

          </div>
          {/*if ready*/}
          <div className="donor-container--main__data">

          </div>
          {/*disabled if isBeingModerated*/}
          <div className="donor-container--main__button">

          </div>
        </div>
      </div>
    )  
  }
}