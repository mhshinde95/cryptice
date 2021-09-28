import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from ".";
import Loader from "./Loader";
import Fade from "react-reveal/Fade";

function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data);
  if (isFetching) return <Loader />;
  return (
    <>
      <Fade bottom>
        <Typography.Title level={2} className="heading">
          Global Crypto Statistics
        </Typography.Title>
      </Fade>
      <Row>
        <Col span={12}>
          <Fade bottom>
            <Statistic
              title="Total Crypto Currencies"
              value={globalStats.total}
            />
          </Fade>
        </Col>
        <Col span={12}>
          <Fade bottom>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
            />
          </Fade>
        </Col>
        <Col span={12}>
          <Fade bottom>
            <Statistic
              title="Total Market Cap"
              value={millify(globalStats.totalMarketCap)}
            />
          </Fade>
        </Col>
        <Col span={12}>
          <Fade bottom>
            <Statistic
              title="Total 24Hr Volume"
              value={millify(globalStats.total24hVolume)}
            />
          </Fade>
        </Col>
        <Col span={12}>
          <Fade bottom>
            <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
            />
          </Fade>
        </Col>
      </Row>

      <div className="home-heading-container">
        <Fade bottom>
          <Typography.Title level={2} className="home-title">
            Top 10 Cryptocurrencies in the World
          </Typography.Title>
          <Typography.Title level={4} className="show-more">
            <Link to="/cryptocurrencies">Show More</Link>
          </Typography.Title>
        </Fade>
      </div>

      <Cryptocurrencies simplified={true} />

      <div className="home-heading-container">
        <Fade bottom>
          <Typography.Title level={2} className="home-title">
            Latest Crypto News
          </Typography.Title>
          <Typography.Title level={4} className="show-more">
            <Link to="/news">Show More</Link>
          </Typography.Title>
        </Fade>
      </div>

      <News simplified />
    </>
  );
}

export default Homepage;
