import React from 'react'
import '../styles/navbar.css';


export default class NavBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          navbarMenu: ['Menu 1', 'Menu 2', 'Menu 3'],
        }
      }

    render(){
        const arr = this.state.navbarMenu.map((item, index)=>
        <li className = "navitem" key = {index}>
            <a href="">{item}</a>
        </li>    

    );
    return(
        <header className="header">
        
        <div className = "block left-nav">
            <h1 className="logo"><a href="#">LOGO</a></h1>
        </div>
        
        <div className = "block right-nav">
            <ul className="main-nav">
            {arr}
            </ul>
        </div>

        
        
        </header> 
        
    )
    }

}