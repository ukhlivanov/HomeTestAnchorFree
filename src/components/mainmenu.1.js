import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Menu1 from './menu1'
import Menu2 from './menu2'
import Menu3 from './menu3'
import Menu4 from './menu4'
import Menu5 from './menu5'


import '../styles/mainmenu.1.css';


export default class MainMenu extends React.Component{

    constructor(props){
        super(props)
    
        this.state = {
          homeComponent: '',  
          pages:[

                {'url': 'menu1',
                 'active': true,
                 'component': Menu1,
                 'text': 'Menu 1'   
                },
                {'url': 'menu2',
                'active': false,
                'component': Menu2,
                'text': 'Menu 2'    
               },
               {'url': 'menu3',
                'active': false,
                'component': Menu3,
                'text': 'Menu 3'    
               },
               {'url': 'menu4',
                'active': false,
                'component': Menu4,
                'text': 'Menu 4'    
               },
               {'url': 'menu5',
                'active': false,
                'component': Menu5,
                'text': 'Menu 5'    
               }
            ]
        }
      }

      handleClick(e){
        let link = e.target.href
        let shortLink = link.split('/')

        let tmp = this.state.pages.slice(0)

        for(let i=0; i<tmp.length; i++){
            if(tmp[i].active === true) {
                tmp[i].active = false
            }
            if(tmp[i].url === shortLink[shortLink.length-1]) tmp[i].active = true
        }

        this.setState({
            pages: tmp
        })

      }

      componentDidMount(){
        window.location.replace('http://localhost:3000/#/menu1')
      }

    render(){
        let arrObj = this.state.pages
        let arrMenu = []
        let arrRoutes = []

        for(let i=0; i<arrObj.length; i++){
            if(arrObj[i].active == true){

                arrMenu.push(
                <li key={i} className="li_active">
                <NavLink onClick = {(e) => this.handleClick(e)} 
                        exact to={"/" + arrObj[i].url}>{arrObj[i].text}
                </NavLink></li>)
              
                arrRoutes.push(<Route exact path={"/" + arrObj[i].url} component={arrObj[i].component}/>)     
            }
            else{
                
                arrMenu.push(<li key={i} >
                             <NavLink onClick = {(e) => this.handleClick(e)} 
                             to={"/" + arrObj[i].url}>{arrObj[i].text}</NavLink></li>)

                arrRoutes.push(<Route path={"/" + arrObj[i].url} component={arrObj[i].component}/>)   
            }
        } 
        return(
            <HashRouter>
                <div className="container">
                    <div className="grid-15">
                            <ul className="vertical-menu">
                                {arrMenu}
                            </ul>
                    </div>
                    <div className="grid-70">
                             <div className="content">
                                {arrRoutes}
                            </div>
                    </div>
                    <div className="grid-15">
                        <div className="right">
                            <p className="right_title">Right side</p>
                                <div className = "right_content">
                                <p><span className = "right_child_title">Metus mus montes</span>
                                <br/>
                                <span className='right-text'>Cras facilisis urna ornare volutpat, et convallis erat elementum.  
                                Eget rhoncus nibh metus nec massa.</span></p>
                            
                                <p><span className = "right_child_title">Hendrerit dis hendrerit</span>
                                <br/>
                                <span className='right-text'>Maecenas hendrerit laoreet augue molestie. 
                                Cum sociis natoque penatibus et magnis dis parturient 
                                montes, nascetur hendrerit mus.</span></p>
                            
                                <p><span className = "right_child_title">Natoque ridiculus parturient</span>
                                <br/>
                                <span className='right-text'>Maecenas hendrerit laoreet augue nec molestie. 
                                Cum sociis natoque penatibus et magnis dis parturient 
                                montes.</span></p>   
                                </div>
                             
                        </div>
                            
                    </div>

                </div>
            </HashRouter>
    
        )
    }
    
}