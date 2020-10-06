import React from 'react';
//import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './index.css';

          // main: '#DCDCDC',
          // dark: '#808080',

class CustomButton extends React.Component {

    constructor(){
        super();

        // state of
        this.state = {
        	color: '#DCDCDC',
            disableToggle: false,        }

        this.clickedOn = this.clickedOn.bind(this)
        this.clickedOff = this.clickedOff.bind(this)
        this.disabled = this.disabled.bind(this)
        this.enabled = this.enabled.bind(this)
    }


   	clickedOff() {
   		this.setState({color: '#DCDCDC'})
   	}

   	clickedOn() {
   		this.setState({color: '#808080'})
   	}

    disabled() {
       this.setState({disableToggle: true})
       this.setState({color: '#DCDCDC'})
    }

    enabled() {
       this.setState({disableToggle: false})
    }


    // display individual button
  	render() {
  		return (
            <Button 
      			value = {this.props.value} 
                disabled = {this.state.disableToggle}
      			style = {{backgroundColor: this.state.color}} 
      			onClick = {this.props.onClick}
      			>
	  		{this.props.value}
  			</Button> )
  	}
}

export default CustomButton;