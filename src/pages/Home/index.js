import React,{ Component } from "react";
import tupian from "assets/jay.jpg";
import "./index.css";
class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return <div className="bg"><img src={tupian} /></div>
  }
}


export default Home;
