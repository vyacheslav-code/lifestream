import React from 'react';

import { Switch } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone'

export default class extends React.Component {

  state = {
    open: false,
    file: '',
    checked: false
  }


  handleSetActive = e => {
    this.setState({
      checked: e.target.value,
    })
  }

  handleOpenUpload = () => {
    this.setState({ open: true });
  }

  handleCloseUpload = () => {
    this.setState({ open: false })
  }

  handleUpload = (files) => {
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.setState({
        open: false,
        files: reader.result
      }, () => {
        this.props.onSendData({
          id: 1,
          donorId: this.props.data.id,
          donorName: this.props.data.name,
          content: this.state.files,
          state: 'pending'
        });
      });
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className="donor-container">
        <div className="donor-container--header">
          <div
            style={{ backgroundImage: `url(${data.avatar})`}}
            className="donor-container--header__avatar"
          >
            <div className="donor-container--header__rating">
              {data.rating}
            </div>
          </div>
          <div className="donor-container--header__name">
            {data.name}
          </div>
          <div className="donor-container--header__switch">
            <Switch
              checked={this.state.checked}
              disabled={!data.reqId || !data.isConfirmed}
              onChange={this.handleSetActive}
            />
          </div>
        </div>
        <div className="donor-container--main">
          <div className="donor-container--main__placeholder">
            {!data.reqId && <p>Добро пожаловать, загрузите свои данные</p>}
          </div>
          {data.isConfirmed &&
          <div className="donor-container--main__data">
            Тромбоциты, плазмосдача, кровосдача сделай типа все готово к сдаче
          </div>
          }
          <div className="donor-container--main__button">
            <button
              disabled={data.reqId && !data.isConfirmed}
              onClick={this.handleOpenUpload}
            >
              Загрузить данные
            </button>
          </div>
        </div>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleUpload}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleCloseUpload}
          filesLimit={1}
        />
      </div>
    )  
  }
}