import React from 'react';
//import ReactDOM from 'react-dom';
import CustomButton from './customButton';
import './index.css';
//question: should this variable rlly be called constant??
import * as constant from './stringConstants';


class PotType extends React.Component {

	constructor() {
		super();

		// submitValue holds the value of clicked button in PotType row
		this.state = {
			submitValue : ''
		}
	}


	handleClick = ev => { 
		// map values (string constants) to appropriate button
		let mappy = {[constant.RFI]: this._custombutton, [constant.VS_OPEN]: this._custombutton2, [constant.VS_3]: this._custombutton3, [constant.BVB]: this._custombutton4}
		this.props.pToggleButtons(ev, mappy)

		// update state of value in parents class bumfuck
		this.props.updatePotState(ev.currentTarget.value)
		// update state of submitValue in this class
		this.setState ({submitValue: ev.currentTarget.value})
		
	}


	render() {

	    return (
	      	<div>
	       		<form onSubmit={this.onFormSubmit}>
	        		<div className="board-row">
	        			<CustomButton value={constant.RFI} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton = ref)} ></CustomButton>
	       				<CustomButton value={constant.VS_OPEN} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton2 = ref)} ></CustomButton>
	       				<CustomButton value={constant.VS_3}onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton3 = ref)} ></CustomButton>
	       				<CustomButton value={constant.BVB} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton4 = ref)} ></CustomButton>
	        		</div>
	        	</form>
	      </div>
	    );
  		}
}




export default PotType;
