import React, {Component} from 'react';

class Modal extends Component{
  render(){
    const {header, body} = this.props;
    return(
      <div className="modal before">
        <div className="modal-header">{header}</div>
        <div className="modal-body">{body}</div>
      </div>
    )
  }
}

export default Modal;
