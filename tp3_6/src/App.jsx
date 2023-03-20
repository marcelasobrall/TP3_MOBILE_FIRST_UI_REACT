import React from 'react'
import './App.css'
import Header from './Header'
import SideNav from './SideNav'  
import Footer from './Footer'

export default function App() {
  return (
    <main>
      <Initial/>
    </main>
  )
}
class Initial extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <SideNav/>
        <Footer/>
      </div>
    )
  }
}