import {TypesActions} from '../actions/TypesActions';

const clientReducers = (state = {clients: [], filter: ''}, action) => {
 switch (action.type){
  case TypesActions.CREATE_CLIENT:
  return {clients: [...state.clients, {
   id: action.id,
   name: action.client
  }],
  filter: ''
 }
  case TypesActions.FILTER_CLIENT:
  const clients = state.clients;
  return {
   clients: [...clients],
   filter: action.filter
  };
  default:
   return state;
 }
}

export default clientReducers;