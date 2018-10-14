import React, { Component } from 'react';
import logo from './flag.gif'

class Header extends Component{
    constructor (props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <header>
                <div className="header">
                    <div className="header-left">
                        <img src={logo} className="logo"/>
                    </div>
                    <div className="header-right">
                        <div className="header-nav">
                            <nav className="navbar">
                                <ul>
                                    <li>Places to Go</li>
                                    <li>Things to Do</li>
                                    <li>Plan your trip</li>
                                    <li>Offers</li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;