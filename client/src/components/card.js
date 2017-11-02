import React, {Component, PropTypes} from "react";
import { Link } from 'react-router'



export default class Card extends React.Component  {
	constructor(props) {
  		super(props);
 	 }

 	render(){
 		const {card} = this.props
 		return(
 			<div className="col-sm-4">
 			<Link to={`/cards/${card.id}`} activeClassName="active" >
 			<div style={{border:'1px solid #ddd',backgroundColor:'white' , padding: '20px'}}>
 			<img  src={card.imageUrl}  height="60" width="60"/>
 			<br></br>
 			<br></br>

 			<h4>{card.title}</h4>
 			<span style={{fontSize: '12px', margin: 0, padding: 0, lineHeight: '2px'}}>Based in {card.location}, since 2014</span>
 			<hr style={{color: 'blue'}}></hr>
 			<p style={{fontSize: '12px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
 			
 			<h5>{card.domains[0]}</h5>
 			<h5>{card.domains[1]}</h5>
 			<h5>{card.domains[2]}</h5>
 			
 			<hr></hr>
 			<div>
 			<span>Revenue</span>
 			<span> Stage</span>
 			</div>
 			<div>
 			<span>{card.Revenue} $</span>
 			<span>  {card.stage}</span>
 			</div>

 			</div>
 			</Link>
 			</div>
 			)
 	} 


}