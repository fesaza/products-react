import {TypesActions} from './TypesActions';
let nextClientId = 0
export const addClient = client => (
 {type: TypesActions.CREATE_CLIENT, id: nextClientId++, client}
);

export const filterClient = filter => (
 {type: TypesActions.FILTER_CLIENT, filter}
);