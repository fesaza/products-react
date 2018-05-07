import React from 'react';
import propTypes from 'prop-types';

const Clients = ({clients, filter, save}) => {
let input;
return(
 <div>
  <h1>Clients page</h1>
  <div>
   <form >
    <input type="text" ref={node => input = node} />
    <input type="submit" value="Save" onClick={e => {
     e.preventDefault(); 
     save(input.value);
     input.value = '';
    }
     } />
   </form>
  </div>
  <ul>
   {
    clients.map(client => (
     <li key={client.id}>
      {client.name}
     </li>
    ))
   }
  </ul>
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
