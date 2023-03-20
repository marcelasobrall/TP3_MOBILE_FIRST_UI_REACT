import React from "react";
import Logo from './logo.jpg';
import "./HeaderStyle.css"

export default class Header extends React.Component{
  render(){
    return(
    <>
      <header>
        <div className="container">
          <a href="#"><img className="logo"src={Logo} alt="logo" ></img></a>
          <nav>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contatcs</a></li>
              <li><a href="#">Sobre</a></li>
          </nav>
        </div>
      </header>
    </>
  )
  }
}