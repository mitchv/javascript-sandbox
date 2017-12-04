import React from 'react';
import { getFunName } from './helpers';

class StorePicker extends React.Component {
	goToStore(event) {
		event.preventDefault();
		console.log(this.storeInput.value)
		//move url
	}
	render(){
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
			{ /* this is a comment */}
				<h2>Please Enter A Store</h2>
	<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
				<img src="" alt="" />
				<button type="submit">Visit Store</button>
			</form> 
			
		)
	}
}

export default StorePicker;