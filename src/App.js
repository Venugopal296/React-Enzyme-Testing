import React from 'react';

import Header from './components/header/index';
import Headline from './components/headline/index';
import './App.scss'

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
	 const tempArr = [{
		fName: 'Joe',
		lName: 'Bloggs',
		email: 'joebloggs@gmail.com',
		age: 24,
		onlineStatus: true
	}];

function App() {
	return (
		<div className='App'>
			<Header />
			<section className="main">
				<Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
			</section>
		</div>
	);
}

export default App;
