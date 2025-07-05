import './product.css';
function Product({ title, price}){
    let styles={backgroundColor:price>3000 ?"pink":""};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>price ={price}</h5>
            {price>3000 && <p>Discount of 5%</p>}
           
        </div>
    );
}

export default Product;


