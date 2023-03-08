import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './product.css'
import axios from "axios";
export default function Display() {


  const [products, setProducts] = useState([]);
  const [data,setData] =useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/getProduct").then((response) => {
      setProducts(response.data);
    });
  }, []);


  return (
    <div>

    <h2 className='head'>ProductDetails </h2>
      <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Discount</th>
                        <th>Quality</th>
                    </tr>
                </thead>
                <br></br>
                <tbody>
                    {products.map(product =>
                        <tr key={product.id}>
                        <td>{product.id}</td>
                            <td>{product.pro_name}</td>
                            <td>{product.cost}</td>
                            <td>{product.stock}</td>
                            <td>{product.category}</td>
                            <td>{product.discount}</td>
                            <td>{product.quality}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    </div>

  )
}

