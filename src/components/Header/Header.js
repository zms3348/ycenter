/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import muiStyles from 'muicss/lib/sass/mui.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';

class Header extends React.Component {
  render() {
    const s1 = { verticalAlign: 'middle' };
    const s2 = { textAlign: 'left', paddingRight: 25 };
    const s3 = { backgroundColor: '#EFEFEF', paddingTop:15 };
    const s4 = { paddingLeft: 15, textAlign: 'left' };
    const s5 = { fontSize:'19pt', fontFamily:'Open Sans', color:'black', verticalAlign:'middle' };

    return (
      <header>
        <Appbar style={s3} className=".mui--appbar-height">
          <span className="mui--pull-left">
            <span style={s4, s1}><Button variant="flat"><img src={logoUrl} /></Button></span>
            <span style={s5}> Y-Center Online </span>
          </span>
          <span className="mui--pull-right">
            <span style={s2, s1}><Button variant="flat">About</Button></span>
            <span style={s2, s1}><Button variant="flat">Team</Button></span>
            <span style={s2, s1}><Button variant="flat">Contact</Button></span>
          </span>
          <div className="mui--clearfix"></div>
        </Appbar>
      </header>
    );
  }
}

export default withStyles(s, muiStyles)(Header);
