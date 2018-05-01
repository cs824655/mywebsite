import React from 'react';
import '../style/body.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Introduction extends React.Component {

	render() {
		return (
			<Grid>
				<Row className='intro-row'>
					<Col className='profile-img-col' lg={6}>
						<img className='profile-img' src={require('../assets/profile.JPG')} />
					</Col>
					<Col lg={6}>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Introduction;