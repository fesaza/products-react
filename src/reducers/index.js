import {combineReducers} from 'redux';
import products from './ProductReducers';
import clients from './ClientReducers';

const rootReducers = combineReducers({
 products,
 clients
});

export default rootReducers;
