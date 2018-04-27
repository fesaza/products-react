let products = require('./data').default;


let ApiData = {
 getAll(){
  return {
   items: products, 
   totalCount: products.length,
   hiddenCount: 0
  };
 },

 getByCategory(category){
  if(!category || category === 'All'){
   return this.getAll();
  }
  else {
   let items = products.filter(product => {
    return product.categories.some(cat => cat === category);
   });
   return {
    items, 
    totalCount: products.length,
    hiddenCount: products.length - items.length
   }
 }
 },

 getCategories(){
  return ['Tech','Services', 'Office'];
 }
}

export default ApiData;