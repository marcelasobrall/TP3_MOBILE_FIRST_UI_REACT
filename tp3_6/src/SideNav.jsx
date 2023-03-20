import React from "react";
import "./App";
import "./SideNavStyle.css";

export default class SideNav extends React.Component{
  render(){
    return(
    <div className = "sidenav">
      <a href="#">Perfil</a>
      <a href="#">Reports</a>
      <a href="#">Products</a>
      <a href="#">Teams</a>
      <a href="#">Messages</a>
      <a href="#">Support</a>
    </div>
  )
  }  
}