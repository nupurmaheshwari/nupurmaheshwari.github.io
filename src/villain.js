import React from 'react';
import CustomButton from './customButton';
import './index.css';
import * as constant from './stringConstants';


class Hero extends React.Component {
	constructor() {
		super();

		// submitValue holds the value of clicked button in villain row
		this.state = {
			submitValue : ''
		}
	}

	handleClick = ev => { 
		let mappy = {[constant.UTG]: this._custombutton, [constant.MP]: this._custombutton2, [constant.LJ]:  this._custombutton3, [constant.HJ]: this._custombutton4, 
			[constant.CO]: this._custombutton5, [constant.BU]: this._custombutton6, [constant.SB]:  this._custombutton7, [constant.BB]: this._custombutton8}

		this.props.vToggleButtons(ev, mappy)

		// update state of value in parents class bumfuck
		this.props.updateVillainState(ev.currentTarget.value)
		// update state of submitValue in this class (for use in form submission)
		this.setState ({submitValue: ev.currentTarget.value})
		//this.props.vSendData(this.state.submitValue)
	}

	componentDidUpdate(props) {
		// allVillainButtons is a dictionary of villain row buttons 
		let allVillainButtons = {[constant.UTG]: this._custombutton, [constant.MP]: this._custombutton2, [constant.LJ]:  this._custombutton3, [constant.HJ]: this._custombutton4, 
			[constant.CO]: this._custombutton5, [constant.BU]: this._custombutton6, [constant.SB]:  this._custombutton7, [constant.BB]: this._custombutton8}

		let vsOpenButtons = {...allVillainButtons} 
		delete vsOpenButtons[constant.SB]
		delete vsOpenButtons[constant.BB]

		let vs3Buttons = {...allVillainButtons}
		delete vs3Buttons[constant.UTG]
		

		// loop through each button and disable or enable based on what PotType value is
		if ((this.props.potValue === constant.RFI) || (this.props.potValue === constant.BVB)) {
			for (var value0 in allVillainButtons) {
				let button = allVillainButtons[value0]
				// disable button
				button.disabled()
				// unclick button
				button.clickedOff()
			}
		}
		else if (this.props.potValue === constant.VS_OPEN) {
			// initial grey out
			// disable last two buttons when vs open clicked
			this._custombutton7.disabled()
			this._custombutton8.disabled()
			// enable all other buttons 
			for (var value1 in vsOpenButtons) {
				let button = vsOpenButtons[value1]
				button.enabled()
			}
			// grey out based on VP<HP rule
			// check if hero button has been selected
			if (this.props.heroValue !== '') {
				// variable to check if VP button is < HP button
				let beforeHero = true
				// loop through vsOpenButtons dictionary
				for (var value2 in vsOpenButtons) {
					// if villain key is equal to clicked hero button, change variable to false
					if (value2 === this.props.heroValue) {beforeHero = false}
					let button = vsOpenButtons[value2]
					//if VP button<HP button, and enable button
					if (beforeHero === true) {
						button.enabled()
					}
					// if VP button>=HP button, disable button
					else {
						button.disabled()
					}
				}
			}
		}
		else if (this.props.potValue === constant.VS_3) {
			// disable first button when vs open clicked
			this._custombutton.disabled()
			// enable all other buttons 
			for (var value4 in vs3Buttons) {
				let button = vs3Buttons[value4]
				button.enabled()
			}
			// grey out based on HP<VP rule
			// check if hero button has been selected
			if (this.props.heroValue !== '') {
				// variable to check if VP button is > HP button
				let afterHero = true
				// if clicked hero button is equal to UTG change variable to false
				if (this.props.heroValue === constant.UTG) {afterHero = false}
				// loop through allButtons dictionary
				for (var value5 in vs3Buttons) {
					let button = vs3Buttons[value5]
					// if HP button>VP button, enable button
					if (afterHero === true) {
						button.disabled()
					}
					else {
						//if HP button<=VP button, enable button
						button.enabled()
					}
					// if villain key is equal to clicked hero button, change variable to false
					if (value5 === this.props.heroValue) {afterHero = false}
				}
			}
		}
	};


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
};

export default Hero;
