import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import api from './services/api';
// import { Canvas } from '@react-three/fiber';
// import Box from './Box';

function App() {
	// return (
	// 	<Canvas>
	// 		<ambientLight />
	// 		<pointLight position={[10, 10, 10]} />
	// 		<Box position={[-2, 0, 0]} />
	// 		<Box position={[2, 0, 0]} />
	// 	</Canvas>
	// );
	const [rotation, setRotation] = useState({ x: 0.0, y: 0.0 });
	const [active, setActive] = useState(false);

	const requestActive = async () => {
		const { data } = await api.get();
		if (data.message === 'mpu6050 turned on') setActive(true);
	};

	const requestRotation = async () => {
		const { data } = await api.get('/mpu');
		setRotation({ x: data.x_rotation, y: data.y_rotation });
	};

	return (
		<Container>
			<Row>
				<Col xs={6} className="text-center">
					<Button onClick={requestRotation} disabled={!active}>
						Request Rotation
					</Button>
					<h1>X: {rotation.x.toFixed(2)}</h1>
					<h1>Y: {rotation.y.toFixed(2)}</h1>
				</Col>
				<Col xs={6} className="text-center">
					<Button onClick={requestActive}>Request Active</Button>
					<h1>Sensor Status: {active ? 'On' : 'Off'}</h1>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
