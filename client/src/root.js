import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../src/containers/app.js';
import Cardcontainer from '../src/containers/cardContainer'
import Carddetailcontainer from '../src/containers/cardDetailContainer'
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Header from "../src/layouts/header.js"


class Root extends Component {

	render() {
		const { store } = this.props;
		return (
			<Provider store={store}>
			<Router   history={hashHistory}>
			<Route path={`/`} component={App}>
			<IndexRoute component={Cardcontainer} />
			<Route path="cards/:id"  component = {Carddetailcontainer} />
			</Route>
			</Router>
			</Provider>
		)
	}

}

export default Root;


