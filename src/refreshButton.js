import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import './index.css';

class RefreshButton extends React.Component {
  constructor(){
    super();

    this.state = {
      color: '#191829',
      border: 'solid #A5A3B2',
      textColor: '#A5A3B2'
    }    
  }

  // display individual button
  render() {
    const mystyle = {
       backgroundColor: this.state.color,
       width: "10%",
       border: this.state.border,
       color: this.state.textColor,
    };
  	return (
      <Button
            value = "clear"
            style = {mystyle}
            disabled = {this.state.disabled}
            onClick = {() => window.location.reload(false)}
            >
            CLEAR
        </Button>



    )
  }
};

export default RefreshButton;