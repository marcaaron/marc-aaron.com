import React, { Component, Fragment, createRef } from 'react';
import LinkList from './LinkList';
import Media from "react-media";

class Links extends Component {
  render() {
    return (
      <Fragment>
        <Media query="(max-width: 574px)">
          { matches => matches && <LinkList size={40}/> }
        </Media>
        <Media query="(min-width: 575px)">
          { matches => matches && <LinkList size={24}/> }
        </Media>
      </Fragment>
    );
  }
}

export default Links;
