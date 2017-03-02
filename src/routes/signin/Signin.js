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
    let s0={backgroundImage:bgImage};
    let s1={paddingTop:80, paddingRight:500, paddingLeft:500, paddingBottom:100};
    let s2={paddingTop:40, paddingBottom:40};
    return (
      <div style={s0} className="mui--text-center">
        <img style={s2} src={logoUrl}></img>
        <Container>
           <Tabs onChange={this.onChange} defaultSelectedIndex={1}>
            <Tab value="pane-2" label="Log In">
              <Form style={s1}>
                <legend>Log In</legend>
                <Input label="Username or Email" floatingLabel={true} required={true} />
                <Input label="Password" type="password" floatingLabel={true} required={true} />
                <Button variant="raised">Log In</Button>
              </Form>
            </Tab>
            <Tab value="pane-1" label="Sign Up" onActive={this.onActive}>
              <Form style={s1}>
                <legend>Sign Up!</legend>
                <Input label="Name" floatingLabel={true} required={true} />
                <Input label="Email Address" type="email" floatingLabel={true} required={true} />
                <Input label="Password" type="password" floatingLabel={true} required={true} />
                <Button variant="raised">Get Started</Button>
              </Form>
            </Tab>
          </Tabs>
        </Container>
      </div>
    )
  }
}

export default withStyles(s, muiStyles)(Signin);
