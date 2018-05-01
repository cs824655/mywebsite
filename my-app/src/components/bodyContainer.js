import React from 'react';
import '../style/body.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Introduction from './introduction';
import Resume from './resume';
import Photos from './photos';

class BodyContainer extends React.Component {
	getBodyComponent() {
		if (this.props.currentPage === 1)
			return (
				<Introduction />
			);
		if (this.props.currentPage === 2)
			return (
				<Resume />
			);
		if (this.props.currentPage === 3)
			return (
				<Photos />
			);
	}

	render() {
		return this.getBodyComponent();
	}
}

export default BodyContainer;