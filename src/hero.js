import React from 'react';
import CustomButton from './customButton';
import './index.css';
import * as constant from './stringConstants';


class Hero extends React.Component {

	constructor() {
		super();

		// submitValue holds the value of clicked button in hero row
		this.state = {
			submitValue : ''
		}
	}

	handleClick = ev => { 
		let mappy = {[constant.UTG]: this._custombutton, [constant.MP]: this._custombutton2, [constant.LJ]:  this._custombutton3, [constant.HJ]: this._custombutton4, 
			[constant.CO]: this._custombutton5, [constant.BU]: this._custombutton6, [constant.SB]:  this._custombutton7, [constant.BB]: this._custombutton8}
		this.props.hToggleButtons(ev, mappy)

		// update state of value in parents class bumfuck
		this.props.updateHeroState(ev.currentTarget.value)
		// update state of submitValue in this class (for use in form submission)
		this.setState ({submitValue: ev.currentTarget.value})
		//this.props.hSendData(this.state.submitValue)
	}

	componentDidUpdate(props) {
		// allHeroButtons is a dict of Hero row buttons 
		let allHeroButtons = {[constant.UTG]: this._custombutton, [constant.MP]: this._custombutton2, [constant.LJ]:  this._custombutton3, [constant.HJ]: this._custombutton4, 
			[constant.CO]: this._custombutton5, [constant.BU]: this._custombutton6, [constant.SB]:  this._custombutton7, [constant.BB]: this._custombutton8}
		
		let firstSixButtons = {...allHeroButtons} 
		delete firstSixButtons[constant.SB]
		delete firstSixButtons[constant.BB]

		let vsOpenButtons = {...allHeroButtons}
		delete vsOpenButtons[constant.UTG]

		// loop through each button and disable or enable based on what PotType value is
		if ((this.props.potValue === constant.RFI) || (this.props.potValue === constant.VS_3)) {
			// disable last two buttons when RFI & vs_3 clicked
			this._custombutton7.disabled()
			this._custombutton8.disabled()
			// enable all other button
			for (var value0 in firstSixButtons) {
				let button = firstSixButtons[value0]
				button.enabled()
			}
		}
		else if (this.props.potValue === constant.BVB) {
			for (var value1 in firstSixButtons) {
				let button = firstSixButtons[value1]
				// disable first six buttons when bvb clicked
				button.disabled()
			}
			// enable other buttons
			this._custombutton7.enabled()
			this._custombutton8.enabled()
		}
		else if (this.props.potValue === constant.VS_OPEN) {
			// disable first button when vs open clicked
			this._custombutton.disabled()
			// enable all other buttons
			for (var value2 in vsOpenButtons) {
				let button = vsOpenButtons[value2]
				button.enabled()
			}
		}
	}


	render() {
	    return (
	      	<div>
	       		<form onSubmit={this.onFormSubmit}>
	        		<div className="board-row">
			        	<CustomButton value={constant.UTG} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton = ref)} ></CustomButton>
			       		<CustomButton value={constant.MP} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton2 = ref)} ></CustomButton>
			       		<CustomButton value={constant.LJ} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton3 = ref)} ></CustomButton>
			       		<CustomButton value={constant.HJ} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton4 = ref)} ></CustomButton>
			       		<CustomButton value={constant.CO} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton5 = ref)} ></CustomButton>
			       		<CustomButton value={constant.BU} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton6 = ref)} ></CustomButton>
			       		<CustomButton value={constant.SB} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton7 = ref)} ></CustomButton>
			       		<CustomButton value={constant.BB} onClick={(ev) => this.handleClick(ev)} ref = {ref => (this._custombutton8 = ref)} ></CustomButton>
					</div>
	        	</form>
	      	</div>
	    );
	}
}

export default Hero;
