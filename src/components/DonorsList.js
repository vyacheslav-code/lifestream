import React from 'react';

export default (props) => (
  <div className="recepient-container--main__list">
    {props.list.map((el, idx) => (
    <div key={idx} className="recepient-container--main__list-item">
      <div
        style={{ backgroundImage: `url(${el.avatar})`}} 
        className="recepient-container--main__list-item-avatar"
      >
      </div>
      <div className="recepient-container--main__list-item-name">
        {el.name}
      </div>
      <div className="recepient-container--main__list-item-tip">
        tip
      </div>
    </div>
    ))
    }
  </div>
)