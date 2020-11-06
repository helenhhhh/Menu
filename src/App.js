import React from "react";
import axios from "axios";
import Detial from "./Detail"
import "./App.css";


class App extends React.Component{
  constructor(){
    super();
    this.state = {categorys:[],detail:[],cateErr:"",detailErr:""};
  }
  componentDidMount(){
   
      axios.get("http://stream-restaurant-menu-svc.herokuapp.com/category")
      .then((res)=>{
        this.setState({categorys:res.data});
      })
      .catch((err)=>{
        this.setState({cateErr:err});
      })
    
    
  }
  handleClick = (id)=>{
   
    axios.get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${id}`)
    .then((res)=>{
      this.setState({detail:res.data});
    }) 
    .catch((err)=>{
      this.setState({detailErr:err});
    })
   
  }


  render(){
    const {categorys,detail,cateErr,detailErr} = this.state;
    return(
      <div>
        <div className="cate_container">
        <h1>Menu Categories</h1>
        <ul>
        {categorys.map(ele=>{
          return( 
            <li key={ele.id} onClick ={()=>this.handleClick(ele.short_name)}> {`${ele.name} - (${ele.short_name})`}</li>
          )
        })}
        </ul>
        </div>
        <div className="detail_contanier">
          <Detial detail = {detail}/>     
        </div>
        
      </div>
    )
  }
}
export default App;