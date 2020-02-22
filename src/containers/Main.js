import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import _ from 'lodash';

import Who from '../components/Who';
import DonorContainer from './DonorContainer';
import RecepientContainer from './RecepientContainer';
import ModeratorContainer from './ModeratorContainer';

export default class Main extends React.Component {
  
  state = {
    who: 0,
    donors: [
      {
        id: 1,
        avatar: 'https://api.adorable.io/avatars/100/a@adorable.io.png',
        name: 'Александр',
        isActive: false,
        isConfirmed: false,
        reqId: null,
        following: [12,13],
        rating: 100
      }
    ],
    recepients: [
      {
        id: 1,
        donors: [{
          id: 1,
          name: '',
          isTipped: false
        }],
        name: 'Валентин',
        avatar: 'https://api.adorable.io/avatars/100/b@adorable.io.png'
      }
    ],
    requests: [
      
    ]
  };

  handleSelect = (isDonor) => {
    this.setState({
      who: isDonor ? 1 : -1
    });
  };

  handleAddRequest = (request) => {
    this.setState((prevState) => {
      return {
        requests: [
          ...prevState.requests,
          request
        ] 
      }
    });
  };

  handleApproveRequest = (request) => {
    let temp = [...this.state.donors];
    temp = _.reject(temp, (el) => el.id === request.donorId);
    temp.push({ ...this.state.donors[0], isConfirmed: true });
    this.setState({
      donors: temp
    });
  }

  renderMain = () => {
    switch (this.state.who) {
      case 0:
        return (
          <Who
            continueDonor={() => this.handleSelect(true)}
            continueRecepient={() => this.handleSelect(false)}
          />  
        );
      case 1:
        return (
          <DonorContainer 
            data={this.state.donors[0]}
            onSendData={this.handleAddRequest}
          />
        );
      case -1:
        return (
          <RecepientContainer />
        )      
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => this.renderMain()} />
          <Route path="/admin" component={() => <ModeratorContainer list={this.state.requests} onApprove={this.handleApproveRequest} />} /> 
        </Switch>
        <Link to="/admin">Админка</Link>
        <Link to="/">домой</Link>
      </BrowserRouter>
    )
  }
}