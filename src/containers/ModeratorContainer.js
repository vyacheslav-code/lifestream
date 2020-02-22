import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map((el, idx) => (
            <ExpansionPanel key={idx}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {el.donorName + '#' + el.donorId}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <img src={el.content} />
                <button onClick={() => this.props.onApprove(el)}>Принять</button>
                <button>Отклонить</button>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        ))}  
      </div>
    )
  }
}