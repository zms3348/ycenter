
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

class Nav extends React.Component {
  render() {
  	let s1 = {verticalAlign: 'middle'};
    let s2 = {textAlign: 'left', paddingRight:25};
    let s3 ={backgroundColor:'#EFEFEF'}
    let s4 ={paddingLeft:15 ,extAlign: 'left' }

    return (
    <header>
       <Appbar style={s3} className=".mui--appbar-height">
       	<table width="35%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height" style={s4}><Button variant="flat"><img src="ycsmall.png"></img></Button></td>
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

ReactDOM.render(<Nav />, document.getElementById('example'));

class FormPage extends React.Component {

  render() {
  	let s1={paddingTop:80, paddingRight:500, paddingLeft:500, paddingBottom:100};
  	let s2={paddingTop:40, paddingBottom:40};
    return (
   <div className="mui--text-center">
       <img style={s2}  src="ycenter.png"></img>
    <div>
    <container>
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
     </container>
     </div>
    </div>
    );
  }
}

ReactDOM.render(<FormPage />, document.getElementById('form'));


class Footer extends React.Component
{
	render()
	{
		let s1={backgroundColor:"#42B2CF"}
		return(
		<div>
			<footer>
			  	<Appbar style={s1}>
			  		<a href="facebook">facebook</a>
			  		<a href="facebook">facebook</a>
			  		<a href="facebook">facebook</a>
			  	</Appbar>
			</footer>
		</div>
			);
	}
}

ReactDOM.render(<Footer/>, document.getElementById('footer'))













