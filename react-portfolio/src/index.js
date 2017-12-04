// let's go!
import React from 'react';
import { render } from 'react-dom';

class Slide extends React.Component {
	render(){
		return <a href="url" target="_blank"><img src="url">caption</a>
	}
}

render (<Slide/>, document.querySelector('#main'));