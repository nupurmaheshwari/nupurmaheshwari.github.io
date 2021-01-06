import React from 'react';
import CustomButton from './customButton';
import './index.css';
import * as constant from './stringConstants';


class StackDepth extends React.Component {

	constructor() {
		super();

		// submitValue holds the value of clicked button in stackDepth row
		this.state = {
			submitValue : '',
		}
	}

	handleClick = ev => { 
		let mappy = {[constant._10]: this._custombutton, [constant._16]: this._custombutton2, [constant._21]:  this._custombutton3, [constant._26]: this._custombutton4, 
			[constant._36]: this._custombutton5, [constant._51]: this._custombutton6, [constant._81]:  this._custombutton7}
		this.props.sToggleButtons(ev, mappy)

		// update state of value in parents class bumfuck
		this.props.updateStackState(ev.currentTarget.value)
		// update state of submitValue in this class (for use in form submission)
		this.setState ({submitValue: ev.currentTarget.value})
		//this.props.sSendData(this.state.submitValue
	}

	render() {
	    return (
	      	<div>
	       		<form onSubmit={this.onFormSubmit}>
	        		<div className="board-row">
			        	<CustomButton value={constant._10} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton = ref)} ></CustomButton>
			       		<CustomButton value={constant._16} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton2 = ref)} ></CustomButton>
			       		<CustomButton value={constant._21} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton3 = ref)} ></CustomButton>
			       		<CustomButton value={constant._26} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton4 = ref)} ></CustomButton>
			       		<CustomButton value={constant._36} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton5 = ref)} ></CustomButton>
			       		<CustomButton value={constant._51} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton6 = ref)} ></CustomButton>
			       		<CustomButton value={constant._81} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton7 = ref)} ></CustomButton>
	        		</div>
	        	</form>
	     	</div>
	    );
	}
}

export default StackDepth;
