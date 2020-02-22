import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <div className="recepient-container">
        <div className="recepient-container--header">
          <div className="recepient-container--header__details">
            <div className="recepient-container--header__avatar">

            </div>
            <div className="recepient-container--header__name">

            </div>
          </div>
          <div className="recepient-container--header__id">

          </div>
        </div>
        <div className="recepient-container--main">
          {/*if list.length === 0*/}
          <div className="recepient-container--main__placeholder">

          </div>
          {/* if list */} 
          <div className="recepient-container--main__list">
            <div className="recepient-container--main__list-item">
              <div className="recepient-container--main__list-item-avatar">

              </div>
              <div className="recepient-container--main__list-item-name">

              </div>
              <div className="recepient-container--main__list-item-tip">

              </div>
            </div>
          </div>
          <div className="recepient-container--button">
            
          </div>
        </div>
      </div>
    )  
  }
}