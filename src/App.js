import React from "react";
import {Switch, Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import { Navbar, Exchange, CryptoDetails, Cryptocurrencies, News, Homepage } from './components';
import './App.css';


const App = () => {
    return(
        <div className="app">
            <div className="navbar">
             <Navbar />
            </div>
            <div className="main">
             <Layout>
                 <div className="routes">
                     <Routes>
                       <Route exact path="/" element = {  <Homepage /> }>
                      
                       </Route>
                       <Route  path="/exchange" element = {  <Exchange /> }>
                       
                       </Route>
                       <Route  path="/cryptocurrencies" element = { <Cryptocurrencies /> }>
                        
                       </Route>
                       <Route  path="/crypto:/:coinId" element = { <CryptoDetails />}>
                       
                       </Route>
                       <Route  path="/news" element = { <News />}>
                       
                       </Route>
                     </Routes>
                 </div>
             </Layout>
            </div>
            <div className="footer">
                
            </div>
        </div>
    )
    
    
}


export default App;