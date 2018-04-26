import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/testComponent';
import './style/index.css';


class Index extends React.Component {
	render() {
		return (
			<div>
				<h1> Hello World! :) </h1>
				<TestComponent/>
			</div>
		);
	}
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);