import React from 'react';
//import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './index.css';

class SubmitButton extends React.Component {

    constructor(){
        super();

        this.state = {
        	color: '#002984',
        }    
    }


    // display individual button
  	render() {
       const mystyle = {
          backgroundColor: this.state.color,
          width: "15%",
        };

  		return (
            <Button 
      			value = "Submit"
      			style = {mystyle}
      			onClick = {this.props.handleSubmit}
      			>
	  		Submit
  			</Button> 
        )
  	 }


}

export default SubmitButton;