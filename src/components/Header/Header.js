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
    let s1 = {verticalAlign: 'middle'};
    let s2 = {textAlign: 'left', paddingRight: 25};
    let s3 = {backgroundColor: '#EFEFEF'};
    let s4 = {paddingLeft: 15, textAlign: 'left'};

    return (
      <header>
        <Appbar style={s3} className=".mui--appbar-height">
          <table width="35%">
           <tbody>
             <tr>
               <td className="mui--appbar-height" style={s4}><Button variant="flat"><img src={logoUrl}></img></Button></td>
               <td className="mui--appbar-height" style={s2}><Button variant="flat">About</Button></td>
               <td className="mui--appbar-height" style={s2}><Button variant="flat">Team</Button></td>
               <td className="mui--appbar-height" style={s2}><Button variant="flat">Contact</Button></td>
             </tr>
           </tbody>
          </table>
       </Appbar>
      </header>
    );
  }
}

export default withStyles(s, muiStyles)(Header);
