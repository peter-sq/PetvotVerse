import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from './services/cryptoApi';


const Title = Typography;


const Homepage = () => {
    const {data, isFetching } = useGetCryptosQuery();
    const globalstats = data?.data?.stats;
    if(isFetching){
        return 'Loading.....'
    }
    return(
    <>
    <Title level ={2} className = "heading">Global Crypto Stats.</Title>
    <Row>
        <Col span={12}><Statistic title = 'Total Cryptocurrencies' value={globalstats.total}/></Col>
        <Col span={12}><Statistic title = 'Total Exchange' value={millify(globalstats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title = 'Total Market Cap' value={millify(globalstats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title = 'Total 24h Volume' value={millify(globalstats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title = 'Total Market' value={millify(globalstats.totalMarkets)}/></Col>
       
    </Row>
    </>
    )
}

export default Homepage;