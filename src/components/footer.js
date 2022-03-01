import React from 'react';
import {Switch, Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

const Footer = () => {
    return(
        <div className="footer">
    <Typography.Title level={5} style = {{color:"white",  textAlign:"center"}}>
        Petvotverse <br />
        All rights reserved
    </Typography.Title>
    <Space>
        <Link to = '/'>Home</Link>
        <Link to = '/exchange'>Exchange</Link>
        <Link to = '/cryptocurrencies'>Cryptocurrencies</Link>
        <Link to = '/crypto:/:coinId'>CryptoDetails</Link>
        <Link to = '/news'>News</Link>
    </Space>
    
</div>
    )
}


export default Footer;