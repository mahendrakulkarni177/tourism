import React, { Component } from 'react';
import './App.css';
import Header from './header';
import world from './world_map.jpg'
import taj from './tajmahal.jpg';
import kashmir from './kashmir.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <Header/>
          <main>
            <img src={world} className="worldmap"/>
              <div className="container grey">
                <div className="container-left circle">
                  <img src={taj} className="left-image"/>
                </div>
                <div className="container-right">
                  <span>TAJ MAHAL</span>
                  <span>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.
                    It was commissioned in 1632 by the Mughal emperor,
                    Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal.
                  </span>
                </div>
              </div>
              <div className="container">
                <div className="container-left">
                </div>
                <div className="container-right circle">
                    <img src={kashmir} className="left-image"/>
                </div>
              </div>
            <div className="container grey">
              <div className="container-left circle">
                <img src={taj} className="left-image"/>
              </div>
              <div className="container-right">

              </div>
            </div>
            <div className="container">
              <div className="container-left">
              </div>
              <div className="container-right circle">
                <img src={kashmir} className="left-image"/>
              </div>
            </div>
            <div className="container grey">
              <div className="container-left circle">
                <img src={taj} className="left-image"/>
              </div>
              <div className="container-right">

              </div>
            </div>
            <div className="container">
              <div className="container-left">
              </div>
              <div className="container-right circle">
                <img src={kashmir} className="left-image"/>
              </div>
            </div>
          </main>
          <footer className="footer">
            <nav className="footer-top">
              <ul>
                <li className="footer-nav">Licence</li>
                <li className="footer-nav">Blog</li>
                <li className="footer-nav">Contact</li>
                <li className="footer-nav">About</li>
                <li className="footer-nav">Privacy Policy</li>
              </ul>
            </nav>
            <nav className="footer-middle">
              <ul>
                <li><i class="social fab fa-instagram"></i></li>
                <li><i class="social fab fa-facebook"></i></li>
                <li><i class="social fab fa-twitter-square"></i></li>
                <li><i class="social fab fa-linkedin"></i></li>
                <li><i class="social fab fa-google-plus-square"></i></li>
              </ul>
            </nav>
            <div className="footer-bottom">
              <div className="copyright">
                <span>Copyright © 2018 <a className="developer" href="#">India Tourism & Mahesh Navgire</a></span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
