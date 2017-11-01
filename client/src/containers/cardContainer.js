import React, {Component} from "react";
import {connect} from "react-redux";
import Card from '../components/card.js';
import * as cardLinks from '../utils/basicUtil.js';
import basicCard_Actions from '../redux/actions/basicCard.js'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Cardcontainer extends Component {
  constructor(props) {
  		super(props);
  		this._renderCards = this._renderCards.bind(this)
  		
  }

  componentDidMount() {
  	const {dispatch} = this.props
  	dispatch(basicCard_Actions.getBasicCards(cardLinks.getbasicCards))
  
	}

  _renderCards(){
    const {basicCard} = this.props.basicCard
  	 return basicCard.map((card) => {
  		return(
  			<Card
  			card = {card}
  			/>
			)
  		})
	}

  render(){
  	return(
  		<div> 
  		<div className="col-sm-4">
  		<h5>RECOMMENDED FOR YOU</h5>
  		<h7>214 Startups</h7>
  		<br></br>
  		<br></br>
  		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
  		</p>
  		<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
  		<br></br>
   		<div style={{display: 'block'}}>
  		<i class="fa fa-lightbulb-o" style={{float:'left',marginRight:'5px'}} aria-hidden="true"></i>
  		<p style={{fontSize: '12px'}}>12 Startups in your domain have been shortlisted by leading corporates</p>
  		</div>

  		</div>
  		<div className="col-sm-8">
  		
  		{this._renderCards()}
  		</div>
  	    </div>
  		)
  }

}


function mapStateToProps(state) {
	return{
		basicCard: state.basicCard
	}
}

export default connect(mapStateToProps)(Cardcontainer);