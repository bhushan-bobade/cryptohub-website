import React, {useState } from "react";
import { Select, Typography, Row , Col, Avatar, Card, Input } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text, Title } = Typography;
const { Option }  = Select;

const demoImage = 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1NQYk15cmZyQUduNHQ3RDIzdFozbm40MnNkd3xBQ3Jtc0ttemNzcFl1cjFsVHJIUi1ySlVuQ2JpaFUzeEU2eHZ6ajdxSmd0bTRKR3k2ZHNpWFNNbVMxeXNza196TWU2STJCSUE3Q3BhOU1fSG1OQW1XLWppbDh3ZHEwc0w3VEJrV2xWSWozU1lpNlhjcXp6SXM5cw&q=https%3A%2F%2Fi.ibb.co%2FZ11pcGG%2Fcryptocurrency.png';

const News = ({ simplified }) => {
    const [ newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const{ data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified? 6 : 12})
    const { data } = useGetCryptosQuery(100);
    
    if(!cryptoNews?.value) return <Loader />;

    return(
       <Row gutter={[24, 24]}>
           {!simplified && (
               <Col span={24}>
                   <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                   >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                   </Select>
               </Col>
           )}
           {cryptoNews.value.map((news, i) => (
               <Col xs={24} sm={12} lg={8} key={i}>
                   <Card hoverable className="news-card">
                       <a href={news.url} target="_blank" rel="noreferrer">
                           <div className="news-image-container">
                               <Title className="news-title" level={4}>{news.name}</Title>
                               <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                           </div>
                           <p>
                              {news.description > 100
                                ? `${news.description.substring(0, 100)}...`
                                : news.description
                              } 
                           </p>
                           <div className="provider-conatiner">
                               <div>
                                   <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                                   <Text className="provider-name">{news.provider[0]?.name}</Text>
                               </div>
                               <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                           </div>
                       </a>
                   </Card>
               </Col>
           ))}
       </Row>
    )
}

export default News