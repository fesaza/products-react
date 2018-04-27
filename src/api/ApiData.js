let products = require('./data').default;


let ApiData = {
 getAll(){
  return products;
 },

 getByCategory(category){
  if(!category || category === 'All'){
   return this.getAll();
  }
  else return products.filter(product => {
   return product.categories.some(cat => cat === category);
  });
 },

 getCategories(){
  return ['Tech','Services', 'Office'];
 }
}

export default ApiData;