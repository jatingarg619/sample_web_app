import React from 'react';
import { render } from 'react-dom';
import css from './src/css/style.css';
import configureStore from './src/redux/configureStore';
import Root from './src/root.js';


const store = configureStore();

render(
	<Root store={store}/>,
	document.getElementById('root')
)