import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styles from './index.module.css';
import Header from '../components/Header'
import Footer from '../components/Footer';
import TabContainer from '../components/TabContainer';
import Media from "react-media";

import './index.css';

class Layout extends Component {
	constructor(props){
		super(props);
    let selected = '';
    const pathname = props.location.pathname;
    if(pathname === "/about" || pathname === "/links"){
      selected = pathname.slice(1, pathname.length);
    }else if(pathname==="/posts"){
      selected = 'links';
    }else{
      selected = 'projects';
    }
		this.state = {
			selected: selected,
			projectIsOpen:false,
			currentProject:{},
			stickyTab: false
		};
	}

	componentDidMount(){
		window.addEventListener('scroll', this.isScrolling);
	}

	isScrolling = () => {
		if(window.scrollY>=80 && this.state.stickyTab === false){
			const stickyTab = true;
			this.setState({stickyTab});
		}else if(window.scrollY<80 && this.state.stickyTab === true){
			const stickyTab = false;
			this.setState({stickyTab});
		}
	}

	_onTabClick = (selected) => {
    if(selected === 'projects'){
      this.props.history.push('/')
    }else{
      this.props.history.push(`/${selected}`);
    }
		this.setState({selected});
	}

  render(){
  	const {selected, stickyTab} = this.state;
  	const trapezoidStyle = {};
  	const cardStyle = {};
  	if(stickyTab && window.innerWidth<575){
  		trapezoidStyle.position='fixed';
  		trapezoidStyle.width=`${window.innerWidth-11}px`;
  		trapezoidStyle.top='64px';
  		cardStyle.marginTop = '79px';
  	}

    const {data, children, location:{pathname}} = this.props;
    return(
    <div className={styles.app}>
      <div className={styles.contentContainer}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header _onTabClick={this._onTabClick} pathname={pathname} siteTitle={data.site.siteMetadata.title} />
        <Media query="(max-width: 574px)">
          {matches => matches &&
            <Fragment>
              <TabContainer
                _onTabClick={this._onTabClick}
                selected={selected}
                stickyTab={stickyTab}
              />
              <div className={styles.trapezoid} style={trapezoidStyle}/>
            </Fragment>
          }
        </Media>
        <div className={styles.card}>
          {children()}
        </div>
      </div>
      <Footer/>
    </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
