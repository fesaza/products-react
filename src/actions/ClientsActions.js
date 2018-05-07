import {TypesActions} from './TypesActions';
let nextClientId = 0
export const addClient = client => {
 return {type: TypesActions.CREATE_CLIENT, id: nextClientId++, client}
}

export const filterClient = filter => {
 return {type: TypesActions.FILTER_CLIENT, filter}
}