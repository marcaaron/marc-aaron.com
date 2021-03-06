import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import Links from './Links'
import { name, role, killStyles, baseStyle } from '../util/header-utils';
import { ArrowLeft } from './icons';
import styles from './Header.module.css';
import Media from "react-media";

// Render Animation state of Header depending on whether we are at root
const renderName = (textArray, pathname) => {
  const isHome = pathname === '/';
	return textArray.map((letter,index) =>
    <div
      className={isHome ? 'none' : styles.role}
      style={isHome ? baseStyle :killStyles[18+index]}
      key={`_letter${18+index}`}>
        {letter===' ' ? '\u00A0' : letter}
    </div>
  )
};

const Header = ({ siteTitle, pathname, _onTabClick }) =>
<Fragment>

  		<Link className={styles.mobileHeader} to="/" onClick={()=>_onTabClick('projects')}>
  			<span className={styles.name}>Marc Aaron Glasser</span>
  			<span className={styles.role}>Web Developer</span>
  		</Link>

    	<header className={styles.header}>
    		<Link to="/" className={styles.headerLeft} onClick={()=>_onTabClick('projects')}>
    			<div className={styles.backButton}
            style={
              pathname !== "/" ?
              {transform:'scale(1,1)', opacity:'1'} :
              {transform:'scale(0,0)',opacity:'0'}
            }>
            <ArrowLeft/>
    				<span>&nbsp; Projects</span>
    			</div>
    			<div className={styles.nameBox}>
            {renderName(name, pathname)}
    			</div>
    			<div className={styles.roleBox}>
            {renderName(role, pathname)}
    			</div>
    		</Link>
    		<div className={styles.headerRight}>
    			<Links/>
          <div className={styles.headerRightNavLinks}>
    				<Link to="/about" onClick={()=>_onTabClick('about')} className={styles.aboutMeLink}>About Me</Link>
    				<Link to="/posts" onClick={()=>_onTabClick('links')} className={styles.aboutMeLink}>Posts</Link>
          </div>
    		</div>
    	</header>
</Fragment>
export default Header
