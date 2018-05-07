import React from 'react';
import propTypes from 'prop-types';
import {
 List,
 ListItem,
 TextField,
 Button
} from 'react-md';

const Clients = ({clients, filter, save}) => {
let input;
return(
 <div>
  <h1>Clients page</h1>
  <div>
   <form onSubmit={e=>e.preventDefault()} >
    <TextField 
    id="name"
    label="Client name"
    lineDirection="center"
    placeholder="type the name"
    className="md-cell md-cell--bottom"
    ref={node => input = node} />
    <Button flat primary swapTheming onClick={e => {
       e.preventDefault(); 
       save(input.value);
      }
     }>Add client</Button>
    
   </form>
  </div>
  <List>
  {
    clients.map(client => (
     <ListItem key={client.id} primaryText={client.name} />
    ))
   }
  </List>
 </div>
);
}

Clients.propTypes = {
clients: propTypes.arrayOf(
propTypes.shape({
 id: propTypes.number.isRequired,
 name: propTypes.string.isRequired
}).isRequired
).isRequired,
filter: propTypes.string
};

export default Clients;
