import React from 'react';
import '../style/header.css';
import { Row, Col } from 'react-bootstrap';

class Navibar extends React.Component {
	getClassName(pageTitle) {
		if (pageTitle === this.props.currentPage)
			return 'navibar-title selected';
		else
			return 'navibar-title';
	}

	render() {
		return (
			<Row className='navibar'>
				<Col className='navibar-title-col' lg={3}>
				</Col>
				<Col className='navibar-title-col' lg={3}>
				<p className={this.getClassName(1)} onClick={this.props.handleClickAbout}>About</p>
				</Col>
				<Col className='navibar-title-col' lg={3}>
				<p className={this.getClassName(2)} onClick={this.props.handleClickEdu}>Education&Career</p>
				</Col>
				<Col className='navibar-title-col' lg={3}>
				<p className={this.getClassName(3)} onClick={this.props.handleClickPhoto}>Photo Gallary</p>
				</Col>
			</Row>
		);
	}
}

export default Navibar;