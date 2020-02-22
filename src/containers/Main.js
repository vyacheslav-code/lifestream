import React from 'react';

import Who from '../components/Who';
import DonorContainer from './DonorContainer';
import RecepientContainer from './RecepientContainer';

export default class Main extends React.Component {
  
  state = {
    who: 0
  };

  handleSelect = (isDonor) => {
    this.setState({
      who: isDonor ? 1 : -1
    });
  }

  render() {
    const { who } = this.state;

    switch (who) {
      case 0:
        return (
          <Who
            continueDonor={() => this.handleSelect(true)}
            continueRecepient={() => this.handleSelect(false)}
          />  
        );
      case 1:
        return (
          <DonorContainer />
        );
      case -1:
        return (
          <RecepientContainer />
        )      
    }
    
  }
}