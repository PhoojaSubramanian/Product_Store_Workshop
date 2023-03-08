import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './product.css'
import axios from "axios";
export default function Details() {


  const [products, setProducts] = useState([]);
  const [data,setData] =useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/getProduct").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8080/deleteProduct/${id}`)
      .then(response => {
        setData(data.filter(data => data.id !== id));
        console.log(response + "deleted");
      })
      .catch(error => {
        console.log(error);
      });
      window.location.reload();
  };

  return (
    <div>
    <div className='nav'>
    <Link to ='/'><p className='home'>Home</p></Link>

    </div>
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
                            <td><button className='del' onClick={() => handleDelete(product.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    <Link to ='/update'><button className='but' type='submit' >Update Product</button></Link>
    <br></br><br></br>
    <Link to ='/add'><button className='but' type='submit' >Add Product</button></Link>
    </div>

  )
}

