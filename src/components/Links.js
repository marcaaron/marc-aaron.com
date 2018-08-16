import React, { Component, Fragment, createRef } from 'react';
import MediaQuery from 'react-responsive';
import LinkList from './LinkList';

class Links extends Component {
  render() {
    return (
      <Fragment>
        <MediaQuery key="_mW767" maxWidth={574}>
          <LinkList size={40}/>
        </MediaQuery>
        <MediaQuery key="_mW768" minWidth={575}>
          <LinkList size={24}/>
        </MediaQuery>
      </Fragment>
    );
  }
}

export default Links;
