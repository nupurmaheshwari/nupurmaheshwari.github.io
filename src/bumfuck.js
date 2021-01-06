import React from 'react';
import SubmitButton from './submitButton';
import RefreshButton from './refreshButton';
import PotType from './pottype';
import StackDepth from './stackDepth';
import Hero from './hero';
import Villain from './villain';
import BvB from './bvb';
import HoleInput from './holeinput';
import Result from './result';
import CalcButton from './calcButton'

export default class BumFuck extends React.Component {

	constructor() {
        super();

        // submitValue holds the value of clicked button in pottype row
        this.state = {
			potValue: '',
			stackValue : '',
			heroValue : '',
			villainValue : '',
			bvbValue : '',
			// hole input value
			holeValue : '',
			action : 'ACTION...',
        }
        this.updatePotValue = this.updatePotValue.bind(this);
        this.updateStackValue = this.updateStackValue.bind(this);
        this.updateHeroValue = this.updateHeroValue.bind(this);
        this.updateVillainValue = this.updateVillainValue.bind(this);
        this.updateBvbValue = this.updateBvbValue.bind(this);
        this.updateHoleValue = this.updateHoleValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

	// setState forces rerender so buttons update with each click
   updatePotValue(val) {
    	this.setState ({potValue: val})
	}
	updateStackValue(val) {
    	this.setState ({stackValue: val})
	}
	updateHeroValue(val) {
    	this.setState ({heroValue: val})
	}
	updateVillainValue(val) {
    	this.setState ({villainValue: val})
	}
	updateBvbValue(val) {
    	this.setState ({bvbValue: val})
	}
	updateHoleValue(val) {
    	this.setState ({holeValue: val})
	}

	// helper function called in every class's handleClick, allowing user to toggle between buttons
	// mappy = map of values to buttons (defined in handleclick)
	// ev = event state
	toggleButtons(ev, mappy) {
		for (var key in mappy) {
			let button = mappy[key]
			if (key === ev.currentTarget.value) {
				button.clickedOn()
		 	}
		 	else {
		 		button.clickedOff()
		 	}
		}
	}


	// upon submitting, value of action field should change and log of all values selected should appear
	handleSubmit() {
		// also works, just puts the error somewhere else
		if (!this.state.holeValue.match(/^([AKQJakqj2-9]|10)([AKQJakqj2-9]|10)([osOS])$/)) {
			// throw error message if hole input is invalid
			this.setState({action: "Hole Input Invalid"})
		}
		else {
			// display all clicked buttons in console log
			var final_array = [this.state.potValue, this.state.stackValue, this.state.heroValue,
			this.state.villainValue, this.state.bvbValue, this.state.holeValue]

			console.log(final_array)

			// TEMP - set output value
			this.setState ({action: "RAISE 2.3X"})
		}
	}



	render() {
		return (
			// created new div "final row" for styling purposes
			<div>
				<h5>POT TYPE</h5>
				<PotType pToggleButtons={this.toggleButtons} updatePotState={this.updatePotValue}/>

				<h5>STACK DEPTH</h5>
				<StackDepth sToggleButtons={this.toggleButtons} updateStackState={this.updateStackValue} />

				<h5>HERO</h5>
				<Hero hToggleButtons={this.toggleButtons} updateHeroState={this.updateHeroValue} villainValue={this.state.villainValue} potValue={this.state.potValue}/>

				<h5>VILLAIN</h5>
				<Villain vToggleButtons={this.toggleButtons} updateVillainState={this.updateVillainValue} heroValue={this.state.heroValue} potValue={this.state.potValue}/>

				<h5>BVB</h5>

				<div className = "bvbRow">
					<BvB bToggleButtons={this.toggleButtons} updateBvbState={this.updateBvbValue} heroValue={this.state.heroValue} potValue={this.state.potValue}/>
				</div>

				<div className = "finalRow">
					<HoleInput potValue={this.state.potValue} updateHoleState={this.updateHoleValue} />
					<RefreshButton/>
					<SubmitButton holeInputValue={this.state.holeValue} submitState={this.submitState} handleSubmit={this.handleSubmit}/>
					<Result finalResult={this.state.action}/>
					<CalcButton/>
				</div>

			</div>
		);
	}
}
