import React from 'react';
import socketIOClient from "socket.io-client";

var socket;

export default class FrontPage extends React.Component{
  
  constructor(props){
    super();
    this.state = {
      endpoint: "localhost:5000"
    }
    socket = socketIOClient(this.state.endpoint);
  }

  componentDidMount(){
    //this.setState();
    console.log("mounted")
    socket.emit("connection");
  }

  render(){
    console.log("render");
    return(
      <div>Test</div>
    )
  }
}