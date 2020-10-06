import React from 'react';
//import ReactDOM from 'react-dom';
//import CustomButton from './customButton';
import './index.css';
import TextField from '@material-ui/core/TextField';


class HoleInput extends React.Component {

	constructor() {
		super();

		this.state = {
			holeInputValue: ""
		}
	}


  	_handleTextFieldChange = (ev) => {
  		this.setState({ holeInputValue: ev.target.value });

        // update state of value in parents class bumfuck
		this.props.updateHoleState(ev.currentTarget.value)
  	}


	render() {
		//className={classes.root}
	    return (
	    	<div className = "holeinput">
	    	    <form noValidate autoComplete="off">
     				 <TextField label="hole input" id="standard-size-small" defaultValue="" size="small" onChange={(ev)=>this._handleTextFieldChange(ev)}/>
    			</form>
    		</div>
	    );
  		}
}


export default HoleInput;
