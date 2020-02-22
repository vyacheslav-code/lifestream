import React from 'react';
import DonorsList from '../components/DonorsList';

export default class extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="recepient-container">
        <div className="recepient-container--header">
          <div className="recepient-container--header__details">
            <div 
              style={{ backgroundImage: `url(${data.avatar})`}}
              className="recepient-container--header__avatar"
            >
            </div>
            <div className="recepient-container--header__name">
              {data.name}
            </div>
          </div>
          <div className="recepient-container--header__id">
            {data.id}
          </div>
        </div>
        <div className="recepient-container--main">
          {data.donors.length === 0 ?
            <div className="recepient-container--main__placeholder">
              Пока что нет доноров, которые вам подходят :(
            </div>
            :
            <DonorsList
              list={data.donors}
            />
          }
        </div>
        <div className="recepient-container--button">
            
        </div>
      </div>
    )  
  }
}