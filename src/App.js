import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import api from './services/api';
import { CSVLink } from 'react-csv';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActive } from './store/motorSlice';

function App() {
	// );
	const motorActive = useSelector(state => state.motor.active);
	const dispatch = useDispatch();

	return (
		<Container>
			<Row>
				<Col xs={6}>
					<h3>Motor Status: {motorActive ? 'On' : 'Off'}</h3>
				</Col>
				<Col xs={6}>
					<Button onClick={() => dispatch(toggleActive())}>
						Turn Motor {motorActive ? 'Off' : 'On'}
					</Button>
				</Col>
			</Row>
		</Container>
	);

	// const [rotation, setRotation] = useState({ x: 0.0, y: 0.0 });
	// const [active, setActive] = useState(false);
	// const [motorStatus, setMotorStatus] = useState(false);
	// const [duration, setDuration] = useState(10.0);
	// const [canToggleMotor, setCanToggleMotor] = useState(true);
	// const [previousDuration, setPreviousDuration] = useState(0.0);
	// const [canRequestAverages, setCanRequestAverages] = useState(true);
	// const [showDownloadLink, setShowDownloadLink] = useState(false);
	// const [rotationData, setRotationData] = useState(null);
	// const [currentDirection, setCurrentDirection] = useState('up');

	// const requestCurrentDirection = async () => {
	// 	const { data } = await api.get('/current_direction');
	// 	setCurrentDirection(data.current_direction);
	// };

	// const requestChangeDirection = async () => {
	// 	const { data } = await api.get('/change_direction');
	// 	setCurrentDirection(data.current_direction);
	// };

	// const requestStatus = async status => {
	// 	const requestStatus = status ? '/motor_on' : '/motor_off';
	// 	const { data } = await api.get(requestStatus);
	// 	if (data.motor_status === 1) return setMotorStatus(true);
	// 	if (data.motor_status === 0) return setMotorStatus(false);
	// };

	// const requestActive = async () => {
	// 	const { data } = await api.get();
	// 	if (data.status === 1) setActive(true);
	// };

	// const requestRotation = async () => {
	// 	const { data } = await api.get('/mpu');
	// 	setRotation({ x: data.x_rotation, y: data.y_rotation });
	// };

	// const requestToggle = async event => {
	// 	event.preventDefault();
	// 	setCanToggleMotor(false);
	// 	const { data } = await api.get('/toggle_motor', {
	// 		params: { duration },
	// 	});
	// 	if (data.status === 1) {
	// 		setCanToggleMotor(true);
	// 		setPreviousDuration(data.duration);
	// 	}
	// };

	// const requestAverages = async event => {
	// 	event.preventDefault();
	// 	setCanRequestAverages(false);
	// 	setMotorStatus(true);
	// 	setCanToggleMotor(false);
	// 	setRotationData(null);
	// 	setShowDownloadLink(false);
	// 	try {
	// 		const { data } = await api.get('/get_averages');
	// 		setRotationData(data.averages);
	// 		setShowDownloadLink(true);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// 	setCanRequestAverages(true);
	// 	setMotorStatus(false);
	// 	setCanToggleMotor(true);
	// };

	// useEffect(() => {
	// 	requestActive();
	// }, []);

	// const headers = [
	// 	{ label: 'Rotation X', key: 'x_rotation' },
	// 	{ label: 'Rotation Y', key: 'y_rotation' },
	// ];

	// return (
	// 	<Container>
	// 		<Row>
	// 			<Col xs={12} className="">
	// 				<div className="py-3">
	// 					<h1>
	// 						<span>Sensor Status: {active ? 'On' : 'Off'}</span>
	// 						<Button
	// 							className="ml-3"
	// 							onClick={requestActive}
	// 							disabled={active}
	// 						>
	// 							Request Active
	// 						</Button>
	// 					</h1>
	// 				</div>
	// 			</Col>
	// 			<Col xs={12} className="">
	// 				<div className="py-3">
	// 					<h1>
	// 						X: {rotation.x.toFixed(2)} Y:{' '}
	// 						{rotation.y.toFixed(2)}
	// 						<Button
	// 							className="ml-3"
	// 							onClick={requestRotation}
	// 							disabled={!active}
	// 						>
	// 							Request Rotation
	// 						</Button>
	// 					</h1>
	// 				</div>
	// 			</Col>
	// 			<Col xs={12} className="">
	// 				<div className="py-3">
	// 					<h1>
	// 						<span>
	// 							Motor Status: {motorStatus ? 'On' : 'Off'}
	// 						</span>
	// 						<Button
	// 							onClick={() => requestStatus(!motorStatus)}
	// 							disabled={!active}
	// 							className="ml-3"
	// 						>
	// 							Toggle Motor
	// 						</Button>
	// 						<Button
	// 							onClick={requestAverages}
	// 							disabled={
	// 								!active ||
	// 								!canRequestAverages ||
	// 								motorStatus
	// 							}
	// 							className="ml-3"
	// 						>
	// 							Request Averages
	// 						</Button>
	// 					</h1>
	// 					{showDownloadLink && (
	// 						<CSVLink
	// 							filename="solar_rotation.csv"
	// 							headers={headers}
	// 							data={rotationData}
	// 						>
	// 							Download CSV
	// 						</CSVLink>
	// 					)}
	// 				</div>
	// 			</Col>
	// 			<Col xs={12}>
	// 				<div className="py-3">
	// 					<h1>
	// 						<span>Current Direction: {currentDirection}</span>
	// 						<Button
	// 							onClick={requestChangeDirection}
	// 							disabled={!active || motorStatus}
	// 						>
	// 							Request Change Direction
	// 						</Button>
	// 					</h1>
	// 				</div>
	// 			</Col>
	// 			<Col xs={12} className="">
	// 				<Form onSubmit={requestToggle} className="py-3">
	// 					<Form.Group controlId="toggleMotor">
	// 						<Form.Label>Duration for toggle (sec):</Form.Label>
	// 						<Form.Control
	// 							type="number"
	// 							value={duration}
	// 							onChange={event =>
	// 								setDuration(
	// 									Number(event.target.value) >= 0.0
	// 										? Number(event.target.value)
	// 										: 0,
	// 								)
	// 							}
	// 						/>
	// 						<Form.Text>
	// 							{previousDuration !== 0.0
	// 								? `Toggled for ${
	// 										previousDuration * 1000
	// 								  } milliseconds.`
	// 								: ''}
	// 						</Form.Text>
	// 					</Form.Group>
	// 					<Button
	// 						type="submit"
	// 						variant="primary"
	// 						disabled={!active || !canToggleMotor}
	// 					>
	// 						Toggle Motor
	// 					</Button>
	// 				</Form>
	// 			</Col>
	// 		</Row>
	// 	</Container>
	// );
}

export default App;
