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
import s from './Home.css';
import muiStyles from 'muicss/lib/sass/mui.scss';
import Container from 'muicss/lib/react/container';
import Panel from 'muicss/lib/react/panel';


class Module extends React.Component
{
  render()
  {
    return(
        <Panel>
          {this.props.module}
        </Panel>
      );
  }
};


class Home extends React.Component {
  // static propTypes = {
  //   news: PropTypes.arrayOf(PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     link: PropTypes.string.isRequired,
  //     content: PropTypes.string,
  //   })).isRequired,
  // };

  render() {
    let s1 = {textAlign:"left", fontSize:"24.5"}
    let s2 = {height:"90vh", paddingTop:40, backgroundColor:"#80CADE"}
    return (
      <div style={s2}>
        <Container>
          <Container style={s1}>
            <a href="#week1">
            <Module module="Week 1: Understanding and Framing Problems" />
            </a>
          </Container >
          <Container style={s1}>
            <a href="#week2">
            <Module module="Week 2: Gathering and Synthesizing Data" />
            </a>
          </Container>
          <Container style={s1}>
            <a href="#week3">
            <Module module="Week 3: Ideation and Prototyping" />
            </a>
          </Container>
          <Container style={s1}>
            <a href="#">
            <Module module="Week 4: Feedback and Presentation" />
            </a>
          </Container>
        </Container>
      </div>
    );
  }
}

export default withStyles(s, muiStyles)(Home);
