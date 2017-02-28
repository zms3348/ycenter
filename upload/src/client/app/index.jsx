
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
var Dropzone = require('react-dropzone');



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

var DropzoneDemo = React.createClass({
     onDrop: function(files)
    {
        var req = request.post('/upload');
        files.forEach((file)=>{req.attach(file.name, file);});
        req.end(callback);
    },

    onOpenClick: function () 
    {
      this.refs.dropzone.open();
    },

    render: function () {
      return (
          <div>
            <Dropzone ref="dropzone" onDrop={this.onDrop} >
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <button type="button" onClick={this.onOpenClick}>
                Open Dropzone
            </button>
            {this.state.files ? 
            <div>
            <h2>Uploading {files.length} files...</h2>
            <div>this.state.files.map((file) => <img src={file.preview} />)</div>
            </div> 
            : null}
          </div>
      );
    }
});
ReactDOM.render(<DropzoneDemo />, document.getElementById('upload'));


class Comment extends React.Component
{
  render()
  {
    return(
      <div className="comment">
        <p className="comment-header">{this.props.author}></p>
        <p className="comment-body">{this.props.body}></p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">
           Delete Comment
          </a>
        </div>
      </div>

      );
  };
}
class CommentBox extends React.Component
{
  render()
  {
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">2</h4>
        <div className="comment-list">
          <Comment 
          author="yo Mama" body="wassup nigga"/>
          <Comment
          author="wassup homie" body="cash money heros"/>
        </div>
      </div>
      );

  };
};
ReactDOM.render(<CommentBox/>, document.getElementById("comments"));