
import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab'
import Panel from 'muicss/lib/react/panel';
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';

// var App = React.createClass({
//   showLeft: function() {
//     this.refs.left.show();
//   },

//   showRight: function() {
//     this.refs.right.show();
//   },

//   render: function() {
//     return <div>
//       <button onClick={this.showLeft}>Show Left Menu!</button>
//       <button onClick={this.showRight}>Show Right Menu!</button>

//       <Menu ref="left" alignment="left">
//         <MenuItem hash="first-page">First Page</MenuItem>
//         <MenuItem hash="second-page">Second Page</MenuItem>
//         <MenuItem hash="third-page">Third Page</MenuItem>
//       </Menu>

//       <Menu ref="right" alignment="right">
//         <MenuItem hash="first-page">First Page</MenuItem>
//         <MenuItem hash="second-page">Second Page</MenuItem>
//         <MenuItem hash="third-page">Third Page</MenuItem>
//       </Menu>
//     </div>;
//   }
// });
// var Menu = React.createClass({
//   getInitialState: function() {
//     return {
//       visible: false  
//     };
//   },

//   show: function() {
//     this.setState({ visible: true });
//     document.addEventListener("click", this.hide.bind(this));
//   },

//   hide: function() {
//     document.removeEventListener("click", this.hide.bind(this));
//     this.setState({ visible: false });
//   },

//   render: function() {
//     return <div className="menu">
//       <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
//     </div>;
//   }
// });
// var MenuItem = React.createClass({
//   navigate: function(hash) {
//     window.location.hash = hash;
//   },

//   render: function() {
//     return <div className="menu-item" onClick={this.navigate.bind(this, this.props.hash)}>{this.props.children}</div>;
//   }
// });

class NavElements extends React.Component
{

}

class Nav extends React.Component {
  render() {
  	let s1 = {verticalAlign:"verticalAlign"};
    let s2 = {};
    let s3 ={backgroundColor:'#EFEFEF'};
    let s4 ={paddingLeft:20 ,textAlign: 'left' };
    let s5 ={textAlign:'right'};


    return (
    <header>
       <Appbar style={s3} className=".mui--appbar-height">
       	<table width="35%">
         <tbody>
           <tr style={s1}>
             <td ><Button variant="flat"><img src="ycsmall.png"></img></Button></td>
             <td ><Button variant="flat">About</Button></td>
             <td ><Button variant="flat">Team</Button></td>
             <td ><Button variant="flat">Contact</Button></td>
          </tr>
         </tbody>
        </table>
	   </Appbar>
	  </header>
    );
  }
};

ReactDOM.render(<Nav />, document.getElementById('example'));

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

class ModContainer extends React.Component
{
  render(){
    let s1 = {textAlign:"left", fontSize:"24.5"}
    let s2 = {paddingTop:45, paddingLeft:400, paddingRight:100, backgroundColor:"#80CADE"}
  
    return(
      <div style={s2} >
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
  };
};
ReactDOM.render(<ModContainer/>, document.getElementById('module'));

class MenuDropdown extends React.Component
{
  render()
  {
    return(
       <Dropdown color="dark" label={this.props.label} alignMenu="right">
          <DropdownItem>{this.props.item1}</DropdownItem>
          <DropdownItem>{this.props.item2}</DropdownItem>
          <DropdownItem>{this.props.item3}</DropdownItem>
          <DropdownItem>{this.props.item4}</DropdownItem>
       </Dropdown>
      );
  };
};

class MenuButton extends React.Component
{
  render()
  {
    return(
      <Button color="dark">{this.props.name}</Button>
      );
  }
};

class Menu extends React.Component
{
  render()
  {
    let s1 = {layout:"column"}

    return(
      <div style={s1} >
      <MenuButton name="My WhiteBoard"/>
      <MenuDropdown label="Submissions" item1="Week One" item2="Week Two" item3="Week Three" item4="Week Four"/>
      <MenuDropdown label="Submissions" item1="Week One" item2="Week Two" item3="Week Three" item4="Week Four"/>
      <MenuDropdown label="Discussions" item1="Week One" item2="Week Two" item3="Week Three" item4="Week Four"/>
      <MenuDropdown label="Help" item1="Using The Platform" item2="Contact Facilitator" item3="Bug Reports"/>
      </div>

      );
  };
};
ReactDOM.render(<Menu/>, document.getElementById("menu"));

