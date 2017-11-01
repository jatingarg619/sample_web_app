import { combineReducers } from 'redux';
 import basicCard from './basicCard.js';
 import pageCard from './pageCard.js'
// import cards from './cards.js';
// import tasks from './tasks.js';
// import comments from './comments.js';
// import common from './common.js'

var rootReducer= combineReducers({
  	 basicCard: basicCard,
  	 pageCard: pageCard
  	// cards: cards,
  	// tasks: tasks,
  	// comments: comments,
  	// common: common
});

export default rootReducer;