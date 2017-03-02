/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Signin.css';
import muiStyles from 'muicss/lib/sass/mui.scss';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import logoUrl from './ycenter.png';
import bgImage from './coffee.png';

class Signin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const s0 = { background: 'url("'+bgImage+'") no-repeat center center fixed', backgroundSize: 'cover', height:'90vh', paddingTop: 40 };
    const s1 = { margin: '0 auto', width:330 };
    const s2 = { margin: 40 };
    const s3 = { backgroundColor: 'rgba(255,255,255,.95)', width:500, margin: '0 auto', paddingBottom:40 };
    const s4 = { backgroundColor: "white"};
    return (
      <div style={s0}>
        <div style={s3} className="mui--text-center">
          <img style={s2} src={logoUrl} />
          <Container>
            <Tabs onChange={this.onChange} defaultSelectedIndex={0}>
              <Tab value="pane-2" label="Log In">
                <br/><br/>
                <Form style={s1}>
                  <Input style={s4} label="Username or Email" floatingLabel required />
                  <Input style={s4} label="Password" type="password" floatingLabel required />
                  <Button variant="raised">Log In</Button>
                </Form>
              </Tab>
              <Tab value="pane-1" label="Sign Up" onActive={this.onActive}>
                <br/><br/>
                <Form style={s1}>
                  <Input style={s4} label="Name" floatingLabel required />
                  <Input style={s4} label="Email Address" type="email" floatingLabel required />
                  <Input style={s4} label="Password" type="password" floatingLabel required />
                  <Button variant="raised">Get Started</Button>
                </Form>
              </Tab>
            </Tabs>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(s, muiStyles)(Signin);
