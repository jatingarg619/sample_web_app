import React, {Component} from "react";
import Header from "../layouts/header.js"
import Cardcontainer from "./cardContainer.js"
import CardDetailContainer from "./cardDetailContainer.js"
// import { BrowserRouter,Switch, Route } from 'react-router-dom'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
// import { createBrowserHistory } from 'history/createBrowserHistory'
import { Router, Route, IndexRoute, browserHistory } from "react-router";



class App extends Component {

  render(){
 
  	return(
  		
  		<div> 
  		<Header/>

  		<div>{this.props.children}</div>
  	   </div>
  	 
  		)
  }

}

export default App	;