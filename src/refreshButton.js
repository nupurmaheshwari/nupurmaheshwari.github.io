import React from 'react';
//import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import './index.css';



class RefreshButton extends React.Component {

    constructor(){
        super();

        this.state = {
        	color: '#002984',
        }    
    }


    // display individual button
  	render() {

      //state not being used but kept for future possible use
       // const mystyle = {
       //    backgroundColor: this.state.color,
       //    width: "10%",
       //  };

  		return (

        <IconButton style={{color: "#002984"}} onClick={() => window.location.reload(false)}>
          <RefreshIcon />
        </IconButton>
        )
  	 }


}

export default RefreshButton;