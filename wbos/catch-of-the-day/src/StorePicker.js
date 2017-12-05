import React from 'react';
import { getFunName } from './helpers';

class StorePicker extends React.Component {
	goToStore(event) {
		event.preventDefault();
		const storeId = this.storeInput.value;
		//move url
		this.context.router.transitionTo(`/store/${storeId}`)
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

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;