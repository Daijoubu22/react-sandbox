import React from 'react';
import Spline from '@splinetool/react-spline';

function App() {
	return (
		<div className="app">
			<Spline scene="https://prod.spline.design/T0sTYBnpsz2BP-8N/scene.splinecode" height={1000} className="scene" />
			<div className="container">
				<h1 className="title">Hi! My name's Alex</h1>
				<h2 className="subtitle">and I'm a web developer</h2>
			</div>
		</div>
	);
}

export default App;
