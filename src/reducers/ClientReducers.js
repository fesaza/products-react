import {TypesActions} from '../actions/TypesActions';

const clientReducers = (state = [], action) => {
 switch (action.type){
  case TypesActions.CREATE_CLIENT:
  return [...state, {
   id: action.id,
   name: action.client
  }];
  case TypesActions.FILTER_CLIENT:
  return action.filter;
  default:
   return state;
 }
}

export default clientReducers;