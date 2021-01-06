import React from 'react';
import Button from '@material-ui/core/Button';
import './index.css';


class CustomButton extends React.Component {

    constructor(){
        super();

        // state of
        this.state = {
        	color: '#564D8F',
            disableToggle: false,
            textColor: '#ffffff',
        }

        this.clickedOn = this.clickedOn.bind(this)
        this.clickedOff = this.clickedOff.bind(this)
        this.disabled = this.disabled.bind(this)
        this.enabled = this.enabled.bind(this)
    }


   	clickedOff() {
   		this.setState({color: '#564D8F'})
   	}

   	clickedOn() {
   		this.setState({color: '#A196DC'})
   	}

    disabled() {
        this.setState({disableToggle: true})
        this.setState({color: '#564D8F'})
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
