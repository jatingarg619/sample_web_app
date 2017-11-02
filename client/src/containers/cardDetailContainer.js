import React, {Component} from "react";
import {connect} from "react-redux";
import Pageone  from '../components/pageOne.js';
import Pagetwo from '../components/pageTwo.js'
import * as cardLinks from '../utils/pageUtil.js';
import pageCard_Actions from '../redux/actions/pageCard.js'



class Carddetailcontainer extends Component {
	constructor(props) {
  		super(props);
      this._renderPages = this._renderPages.bind(this)
      this._changePage =  this._changePage.bind(this)
      this._handleSubmitOne = this._handleSubmitOne.bind(this)
      this.state = {
       showpage: 1
        }
  	}

  	componentDidMount() {
	   const {dispatch} = this.props
     
     let id = this.props.params.id
    dispatch(pageCard_Actions.getPage(cardLinks.getPage  + id))
  }

    _changePage(page){
      this.setState({showpage: page});
    }

    _handleSubmitOne(overview){
      const {pageData} = this.props.pageCard
      const {dispatch} = this.props
  
      let data = {
           id : pageData.id,
           card_id: pageData.card_id,
           title: pageData.title,
           imageUrl: pageData.imageUrl,
           year: pageData.year,
           location: pageData.location,
           Pageone: {
              team_members: pageData.Pageone.team_members,
              overview: overview
           },
           Pagetwo:pageData.Pagetwo
          }
     dispatch(pageCard_Actions.editCard(cardLinks.updateCard,data))
    }

  _renderPages(){
    const {pageData} = this.props.pageCard
    const {showpage} =  this.state
      if(showpage == 1){
        return(
          <Pageone data ={pageData.Pageone} showpage={showpage} onchange={this._changePage} onUpdate = {this._handleSubmitOne}/>
          )
      }else if(showpage == 2){
        return(
          <Pagetwo data ={pageData.Pagetwo} showpage={showpage} onchange={this._changePage}/>
          )
      }
    }
  

	render(){
    const{pageData} = this.props.pageCard
    console.log(this.props)
    if(pageData === null){
      return <div>Loading</div>
    }else{
    return(
      <div>
  		
  		<div className="col-sm-4">
  		<img src={pageData.imageUrl}  height="60" width="60"/>
  		<br></br>

  		<h3>{pageData.title}</h3>
      <span>Based in {pageData.location}, since {pageData.year}</span>
  		</div>
  		<div className="col-sm-8">
      {this._renderPages()}
  	  		</div>
  	    </div>
        
  		)
  }
  }


}


function mapStateToProps(state) {

	return{
		pageCard: state.pageCard
	}
}

export default connect(mapStateToProps)(Carddetailcontainer);