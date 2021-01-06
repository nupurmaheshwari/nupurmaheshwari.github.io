import React from 'react';
import CustomButton from './customButton';
import './index.css';
import * as constant from './stringConstants';


class BvB extends React.Component {

	constructor() {
		super();

		// submitValue holds the value of clicked button in bvb row
		this.state = {
			submitValue : ''
		}
	}


	handleClick = ev => {
		let mappy = {[constant.SB_U]: this._custombutton, [constant.SB_L_v_I]: this._custombutton2, [constant.SB_v_3]:  this._custombutton3,
			[constant.BB_v_L]: this._custombutton4, [constant.BB_v_O]: this._custombutton5}
		this.props.bToggleButtons(ev, mappy)

		// update state of value in parents class bumfuck
		this.props.updateBvbState(ev.currentTarget.value)
		// update state of submitValue in this class
		this.setState ({submitValue: ev.currentTarget.value})
		//this.props.bSendData(this.state.submitValue)
	}


	componentDidUpdate(props) {
		// allBvbButtons is a dictionary of BvB row buttons
		let allBvbButtons = {[constant.SB_U]: this._custombutton, [constant.SB_L_v_I]: this._custombutton2,
			[constant.SB_v_3]: this._custombutton3, [constant.BB_v_L]: this._custombutton4, [constant.BB_v_O]: this._custombutton5}

		let sbOptions = {[constant.SB_U]: this._custombutton, [constant.SB_L_v_I]: this._custombutton2,
			[constant.SB_v_3]: this._custombutton3}

		let bbOptions = {[constant.BB_v_L]: this._custombutton4, [constant.BB_v_O]: this._custombutton5}

		// loop through each button and disable or enable based on what PotType value is
		if (this.props.potValue === constant.BVB) {
			for (var value0 in allBvbButtons) {
				let button = allBvbButtons[value0]
				// enable button
				button.enabled()
			}
			if (this.props.heroValue === constant.SB) {
				// disable BB buttons
				for (var value1 in bbOptions) {
					let button = bbOptions[value1]
					button.disabled()
				}
				// enable SB buttons
				for (var value2 in sbOptions) {
					let button = sbOptions[value2]
					button.enabled()
				}
			}
			if (this.props.heroValue === constant.BB) {
				// disable SB buttons
				for (var value3 in sbOptions) {
					let button = sbOptions[value3]
					button.disabled()
				}
				// enable BB buttons
				for (var value4 in bbOptions) {
					let button = bbOptions[value4]
					button.enabled()
				}
			}

		}
		else if ((this.props.potValue === constant.RFI) || (this.props.potValue === constant.VS_OPEN) || (this.props.potValue === constant.VS_3)) {
			for (var value5 in allBvbButtons) {
				let button = allBvbButtons[value5]
				// disable button
				button.disabled()
			}
		}
	}


	render() {

	    return (
	      	<div>
	       		<form onSubmit={this.onFormSubmit}>
	        		<div className="board-row">
						<CustomButton value={constant.SB_U} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton = ref)} ></CustomButton>
						<CustomButton value={constant.SB_L_v_I} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton2 = ref)} ></CustomButton>
						<CustomButton value={constant.SB_v_3} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton3 = ref)} ></CustomButton>
						<CustomButton value={constant.BB_v_L} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton4 = ref)} ></CustomButton>
						<CustomButton value={constant.BB_v_O} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton5 = ref)} ></CustomButton>
	        		</div>
	        	</form>
	      </div>
	    );
  	}
}

export default BvB;
