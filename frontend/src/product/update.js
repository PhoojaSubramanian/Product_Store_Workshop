import React ,{Component} from "react";
import './form.css'
import axios from "axios";
import Details from "./details";
import {Link} from 'react-router-dom'
class Update extends Component {
  constructor(props){
    super(props);
    this.state = {
      id : '',
      name : '',
      cost : '',
      stock : '',
      category : '',
      discount : '',
      quality : ''
    }
  }

  handleNoChange = (event) =>{
    this.setState({id : event.target.value});
  }
  handleNameChange = (event) =>{
    this.setState({name : event.target.value});
  }
  handlecostChange = (event) =>{
    this.setState({cost : event.target.value});
  }
  handlestockChange = (event) =>{
    this.setState({stock : event.target.value});
  }
  handlecategoryChange = (event) =>{
    this.setState({category : event.target.value});
  }
  handlediscountChange = (event) =>{
    this.setState({discount : event.target.value});
  }
  handlequalityChange = (event) =>{
    this.setState({quality : event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ sNo, name, episodes, genre });
    const data = {
      id : this.state.id ,
      pro_name : this.state.name ,
      cost : this.state.cost,
      stock  : this.state.stock ,
      category  : this.state.category,
      discount  : this.state.discount,
      quality : this.state.quality
    }
    console.log(data);
    axios.put('http://127.0.0.1:8080/updateProduct', data)
    window.location.reload();
  };

  render (){
    return(
        <container className='main'>
        <Details/>
    <h1>Update the data</h1>
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          placeholder="id"
          value={this.state.id}
          onChange={this.handleNoChange}
        />
        <br></br><br></br>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
         <br></br><br></br>
        <input
          type="number"
          placeholder="cost"
          value={this.state.cost}
          onChange={this.handlecostChange}
        />
         <br></br><br></br>
        <input
          type="number"
          placeholder="stock"
          value={this.state.stock}
          onChange={this.handlestockChange}
        />
         <br></br><br></br>
        <input
          type="text"
          placeholder="category"
          value={this.state.category}
          onChange={this.handlecategoryChange}
        />
         <br></br><br></br>
        <input
          type="number"
          placeholder="discount"
          value={this.state.discount}
          onChange={this.handlediscountChange}
        />
         <br></br><br></br>
         <input
          type="text"
          placeholder="quality"
          value={this.state.quality}
          onChange={this.handlequalityChange}
        />
        <br></br><br></br>
        <button className="but" type="submit">UpdateValue</button>
      </form>
    </container>
  );
}
}
export default Update;

