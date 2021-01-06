import React from 'react';
import Button from '@material-ui/core/Button';
import './index.css';
 //7e7e7e

class SubmitButton extends React.Component {
   
   constructor() {
      super();
      
      this.state = {
         color: '#E3816F',
         disabled: true,
         opacity: 0.4,
         hi: '',
      }
   }

   componentDidUpdate(props) {
      if (this.state.hi !== this.props.holeInputValue) {
         if (this.props.holeInputValue.match(/^([AKQJakqj2-9]|10)([AKQJakqj2-9]|10)([osOS])$/)) {
            this.setState({disabled: false})
            // CHANGE COLOR
            this.setState({color: '#E3816F', opacity: 1})
         }
         else {
            this.setState({disabled: true})
            // CHANGE COLOR
            this.setState({color: '#E3816F', opacity: 0.4})
         }
         this.setState({hi : this.props.holeInputValue})
      }
   }

   // display individual button
   render() {
      const mystyle = {
         backgroundColor: this.state.color,
         width: "15%",
         opacity: this.state.opacity,
      };
  		return (
         <Button
            value = "Submit"
            style = {mystyle}
            disabled = {this.state.disabled}
            onClick = {this.props.handleSubmit}
            >
            Submit
  			</Button>
      )
  	}
}

export default SubmitButton;
