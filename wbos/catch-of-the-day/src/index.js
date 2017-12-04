import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './css/style.css';
import App from './App.js';
import StorePicker from './StorePicker';

const Root = () => {
	return (
		<BrowserRouter>
			<Match exactly pattern="/" component={StorePicker} />
		</BrowserRouter>
	)
}

render (<App/>, document.querySelector('#main'));