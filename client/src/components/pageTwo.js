import React, {Component, PropTypes} from "react";



export default class PageTwo extends React.Component  {
	constructor(props) {
  		super(props);
  		this._handleClick = this._handleClick.bind(this)
 	 }
 	 _handleClick(){
 		this.props.onchange(1)
 	}

 	 render(){
 	 	const {data} =  this.props
 	 	return(
 	 		<div>
 	 		<div className="col-sm-8">
 	 		<div className="col-sm-12">
 	 		<h4>Current Status</h4>
 	 		<div className="col-sm-4">
 	 		<h5>{data.rounds}</h5>
 	 		<h6>Funding Rounds</h6>
 	 		</div>
 	 		<div className="col-sm-4">
 	 		<h5>{data.raised}</h5>
 	 		<h6>Last Funding Raised</h6>
 	 		</div>
 	 		</div>
 	 		<div className="col-sm-12">
 	 		<h4>Recent Funding</h4>
 	 		<div className="col-sm-4">
 	 		<h5>{data.last_round}</h5>
 	 		<h6>Last Funding Round</h6>

 	 		</div>
 	 		<div className="col-sm-4">
 	 		<h5>{data.last_date}</h5>
 	 		<h6>Last Funding Date</h6>

 	 		</div>
 	 		<div className="col-sm-4">
 	 		<h5>{data.last_amount}</h5>
 	 		<h6>Last Funding Amount</h6>

 	 		</div>
 	 		</div>
 	 		<div className="col-sm-12">
 	 		<h4>Traction</h4>
 	 		<div className="col-sm-4">
 	 		<h5>{data.global}</h5>
 	 		<h6>Alexa Rank- Global</h6>

 	 		</div>
 	 		<div className="col-sm-4">
 	 		<h5>{data.india}</h5>
 	 		<h6>Alexa Rank- India</h6>

 	 		</div>
 	 		<div className="col-sm-4">
 	 		<h5>{data.downloads}</h5>
 	 		<h6>No Of App Downloads</h6>

 	 		</div>
 	 		</div>
 	 		</div>
 	 		<div className="col-sm-4">
 	 		<h4>Investors</h4>
 	 		<h5>{data.investors[0]}</h5>
 	 		<h6>Lead Investor</h6>
 	 		<br></br>
 	 		<h5>{data.investors[1]}</h5>
 	 		<br></br>
 	 		<h5>{data.investors[2]}</h5>
 	 		<br></br>
 	 		<h5>{data.investors[3]}</h5>
 	 		</div>

 	 		<div className="col-sm-12">
 	 		<center>
 	 		<button onClick={this._handleClick}>
 	 		<i class="fa fa-download fa-2x" aria-hidden="true"></i>
 	 		</button>
 	 		</center>
 	 		</div>
 	 		</div>
 	 		)
 	 }


}