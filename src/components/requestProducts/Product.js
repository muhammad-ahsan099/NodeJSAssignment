
import React from "react";
import { useProducts } from "./useProduct";
import {Link} from 'react-router-dom';

function Products(params) {
    const [products, loading] = useProducts()

    // start of views / user view
    console.log("Products in Map Function: ", products);
    if (loading) {
        return <div> <p>loading ...</p></div>
    }

    return (<div>
              <h2 style={{textAlign: 'center'}}>Get Request & API's Called by Node JS</h2>
             
        {
            products.map((product, index) => {
                return (
                <div>
                    <p>Name of Product: {product.name}</p>
                    <p>Roll No of Product: {product.rollno}</p><p />
                    <p>Semester of Product: {product.semes}</p>
                    <p> CGPA of Product: {product.cgpa}</p>
                    <p> Class of Product: {product.myClass}</p>
                    <hr />
                </div>
         )})
        }

    </div>);
    

}
// end of views
export default Products;



