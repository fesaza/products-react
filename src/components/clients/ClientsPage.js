import {connect} from 'react-redux';
import {addClient, filterClient} from './../../actions/ClientsActions';
import Clients from './Clients';

const getClients = (clients, filter) => (
 filter ? clients.filter(item => (item.name.includes(filter))) : clients
);

const mapStateToProps = state => ({
 clients: getClients(state.clients.clients, state.clients.filter)
});

const mapDispatchToProps = dispatch => ({
 save: name => dispatch(addClient(name)),
 filter: filter => dispatch(filterClient(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
