import React from 'react';
import '../style/header.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Navibar from './navibar';

class HeaderBar extends React.Component {
	render() {
		return (
			<div>
				<img className='header-bg' src='/assets/headerbg.jpg' />
				<Grid>
					<Row className='header-row'>
						<Col className='header-info' lg={4}>
							<h1 className='name'>Chen Chen</h1>
						</Col>
						<Col className='header-info' lg={8}>
							<Navibar 
								currentPage={this.props.currentPage}
								handleClickAbout={this.props.handleClickAbout}
								handleClickEdu={this.props.handleClickEdu}
								handleClickPhoto={this.props.handleClickPhoto} />
						</Col>
					</Row>
				</Grid>
			</div>

		);
	}
}

export default HeaderBar;