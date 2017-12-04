import React from 'react';

class Slide extends React.Component {
	render(){
		return (
			<a href={this.props.url} target="_blank">
				<img src={this.props.url}>
				<h2>{this.props.caption}</h2>
			</a>
		)
	}
}

export default App;