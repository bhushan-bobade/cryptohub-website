import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/ExchangesApi';
// import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data : Exchanges} = useGetExchangesQuery();
  console.log(Exchanges)

  return (
    <>
    <Row>
      <Col span={6}>Exchanges</Col>
      <Col span={6}>24h Trade Volume</Col>
      <Col span={6}>Markets</Col>
      <Col span={6}>Change</Col>
    </Row>
  </>
  )
}

export default Exchanges;