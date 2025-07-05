import Product from './product.jsx';
let option=["hello","kemcho","mazza-ma"];
function ProductTab(){
    
    return(
        <div className="ProductTab">
               <Product title="phone" price={3000} features={option} />
               <Product title="laptop" price={40000} />
               <Product title="toffee"  price={5} />
        </div>
    )
}
export default ProductTab