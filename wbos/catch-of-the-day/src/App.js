import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
	constructor () {
		super();
		this.addFish = this.addFish.bind(this);
		this.state = {
			fishes: {},
			order: {},
		};
	}
	
	addFish(fish) {
		// update state
		const fishes = {...this.state.fishes};
		// add in our new fish
		const timestamp = Date.now();
		fishes["fish-${timestamp)"] = fish;
		// set state
		this.setState({fishes});
	}
	
	render(){
		return (
			<div className="catch-of-the-day">
				<div>
					<Header tagline="Fresh Seafood Market" />
					<Order />
					<Inventory addFish={this.addFish} />
				</div>
			</div>
		)
	}
}

export default App;