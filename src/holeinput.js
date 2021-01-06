import React from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';


class HoleInput extends React.Component {

	constructor() {
		super();

		this.state = {
			holeInputValue: "",
         error: false
		}
	}

  	_handleTextFieldChange = (ev) => {
  		this.setState({holeInputValue: ev.target.value});
		// if hole input value isn't either empty or valid, display error message
		if (!ev.target.value.match(/^([AKQJakqj2-9]|10)([AKQJakqj2-9]|10)([osOS])$/) && !ev.target.value.match(/^$/)) {
			this.setState({error: true})
		}
		else {
			this.setState({error: false})
		}
      	// update state of hole input value in parents class bumfuck
		this.props.updateHoleState(ev.currentTarget.value)
  	}

	render() {
	    return (
	    	<div className = "holeinput">
	    	    <form noValidate autoComplete="off">
     				<TextField
						error={this.state.error}
						label="HOLE INPUT"
						id="standard-size-small"
						defaultValue=""
						size="small"
						onChange={(ev)=>this._handleTextFieldChange(ev)}
						//helperText={this.state.error}
					/>
    			</form>
    		</div>
	    );
  	}
}

export default HoleInput;
