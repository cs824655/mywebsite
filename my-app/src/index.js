import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/headerBar';
import './style/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1
		};
		this.handleClickAbout = this.handleClickAbout.bind(this);
		this.handleClickEdu = this.handleClickEdu.bind(this);
		this.handleClickPhoto = this.handleClickPhoto.bind(this);
	}

	handleClickAbout() {
		this.setState({
			page: 1
		});
	}

	handleClickEdu() {
		this.setState({
			page: 2
		});
	}

	handleClickPhoto() {
		this.setState({
			page: 3
		});
	}

	render() {
		return (
			<div>
				<HeaderBar
					currentPage={this.state.page}
					handleClickAbout={this.handleClickAbout}
					handleClickEdu={this.handleClickEdu}
					handleClickPhoto={this.handleClickPhoto} />
			</div>
		);
	}
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);