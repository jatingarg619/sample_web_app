import React, {Component, PropTypes} from "react";



export default class Pageone extends React.Component  {
	constructor(props) {
  		super(props);
  		this._renderTeam = this._renderTeam.bind(this)
  		this._handleClick = this._handleClick.bind(this)
  		this._handleEdit = this._handleEdit.bind(this)
  		this._handleSubmit = this._handleSubmit.bind(this)
  		this._handleCancel = this._handleCancel.bind(this)
  		this._handleSegment = this._handleSegment.bind(this)
  		this._handleVertical = this._handleVertical.bind(this)
  		this._handleTechnology = this._handleTechnology.bind(this)
  		this._handleApplication = this._handleApplication.bind(this)
  		this._handleRevenue = this._handleRevenue.bind(this)
  		this._handleStage = this._handleStage.bind(this)
  		this.state = {
       edit: false,
       segment:'',
       vertical: '',
       technology: '',
       application: '',
       revenue: '',
       stage: ''

        }
 	 }

 	 componentDidMount() {
 	 	const {data} = this.props
 	 	 this.setState({segment: data.overview.segment,
 	 	 				vertical: data.overview.vertical,
 	 	 				technology: data.overview.technology,
 	 	 				application: data.overview.application,
 	 	 				revenue: data.overview.revenue,
 	 	 				stage: data.overview.stage
 	 	 });

 	 }
 	 _renderTeam(members){

 	 	 return members.map((member) => {
  		return(
  			<div className = "col-sm-3" style={{margin: '20px'}}>
  			<i className="fa fa-user fa-2x" aria-hidden="true"></i>
  			<h4>{member.name}</h4>
  			<h6>{member.designation}</h6>
  			<span>{member.experience}</span>


  			</div>
			)
  		})
 	 }

 	_handleClick(){
 		this.props.onchange(2)
 	}

 	_handleEdit(){
 		 this.setState({edit: true});
 	}

 	_handleSubmit(e){
 		 e.preventDefault();
 		const overview ={
 			segment: this.state.segment,
 	 	 	vertical: this.state.vertical,
 	 	 	technology: this.state.technology,
 	 	 	application: this.state.application,
 	 	 	revenue: this.state.revenue,
 	 	 	stage: this.state.stage
 		}
 		this.props.onUpdate(overview)

 		 this.setState({edit: false});

 	}

 	_handleCancel(){
 		 e.preventDefault();
 		 this.setState({edit: false});
 	}

 	_handleSegment(e){
 		this.setState({segment: e.target.value});
 	}

 	_handleStage(e){
 		this.setState({stage: e.target.value});
 	}

 	_handleRevenue(e){
 		this.setState({revenue: e.target.value});
 	}

 	_handleApplication(e){
 		this.setState({application: e.target.value});
 	}

 	_handleTechnology(e){
 		this.setState({technology: e.target.value});
 	}

 	_handleVertical(e){
 		this.setState({vertical: e.target.value});
 	}
 	 render(){
       const {data} = this.props
       const {edit,segment,vertical,technology,application,stage, revenue} = this.state
 	 	return(
 	 		<div>
 	 		<div className="col-sm-8">
 	 		<h5>Core Team</h5>
 	 		<div >
 	 		{this._renderTeam(data.team_members)}
			</div>
			</div>
 	 		<div className="col-sm-4 content">
 	 		<div className="edit" onClick={this._handleEdit} ><a ><i className="fa fa-pencil"></i></a></div>
			<h5>Overview</h5>
 	 		<br></br>
 	 	{!edit ? <div>
 	 		{data.overview.segment}
 	 	   
			<h6>SEGMENT</h6>
			<br></br>
 	 		<h6>{data.overview.vertical}</h6>
 	 		<h6>VERTICAL</h6>
 	 		<br></br>
 	 		<h6>{data.overview.technology}</h6>
 	 		<h6>TECHNOLOGY</h6>
 	 		<br></br>
 	 		<h6>{data.overview.application}</h6>
 	 		<h6>APPLICATION</h6>
 	 		<br></br>
 	 		<h6>{data.overview.revenue}</h6>
 	 		<h6>REVENUE</h6>
 	 		<br></br>
 	 		<h6>{data.overview.stage}</h6>
 	 		<h6>STAGE</h6>
 	 		<br></br>
 	 		</div> :
 	 		<div>
 	 		 <form className="container" onSubmit={this._handleSubmit}>
 	 		<input className="form-input" name="segment" value={segment}  onChange={this._handleSegment}  />
 	 		<h6>SEGMENT</h6>
 	 		<input className="form-input" name="segment" value={vertical}  onChange={this._handleVertical}  />
 	 		<h6>VERTICAL</h6>
 	 		<input className="form-input" name="segment" value={technology}  onChange={this._handleTechnology}  />
 	 		<h6>TECHNOLOGY</h6>
 	 		<input className="form-input" name="segment" value={application}  onChange={this._handleApplication}  />
 	 		<h6>APPLICATION</h6>
 	 		<input className="form-input" name="revenue" value={revenue}  onChange={this._handleRevenue}  />
 	 		<h6>REVENUE</h6>
 	 		<input className="form-input" name="stage" value={stage}  onChange={this._handleStage}  />
 	 		<h6>STAGE</h6>
 	 		 <input type="submit" className="btn btn-primary float-right" value="Submit"/>
            <button className="btn btn-link float-left" onClick={this._handleCancel}>Cancel</button>
 	 		</form>
 	 		</div>}
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