import './index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Provider from './Root';
import Todo from '../../components/Todo';

const root = document.querySelector('#root');

export default class App extends Component {
	
	render() {
		return (
			<div className='container'>
				<Todo />
			</div>
		);
	}
}


ReactDOM.render(
	<Provider />,
	root
);