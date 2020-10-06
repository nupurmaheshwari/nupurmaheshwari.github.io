import React from 'react';
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';
import './index.css';
import IconButton from '@material-ui/core/IconButton';
import FunctionsIcon from '@material-ui/icons/Functions';

class Result extends React.Component {

    // constructor(){
    //     super();

    //     // this.state = {
    //     //   text: 'action...'
    //     // }    
    // }

  	render() {

  		return (
        <>

            <div className = "resultField"> {this.props.finalResult} </div>


            <div className="freqBorder">
              <div className="bar"></div>
            </div>

            <IconButton style={{color: "#002984"}} onClick={() => window.location.reload(false)}>
              <FunctionsIcon />
            </IconButton>
        </>
        )
  	 }


}

export default Result;