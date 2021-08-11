


import {useState , useEffect} from 'react';
import axios from 'axios';
import {endPoint} from '../config/Config';

export function useProducts()
{
    const [products , setProducts] = useState([]);
    const [loading , setLoading] = useState(false)

    const fetchProduct = async () =>
    {
        try {
         setLoading(true)   
        // let products = await axios.get(`${endPoint}`);
        let products = await axios.get('http://localhost:5000/');
        console.log("Product in Fetch Fuction show" , products.data);
        setProducts(products.data)
        }
        catch(error)
        {
            console.log("Error Messaeg" , error);
        }
        finally {
            setLoading(false);
        }
    }


    useEffect( ()=>
    {
        fetchProduct();
    } , [] )


    return [ products , loading]
    
}