import React, { useState, useEffect } from 'react';
import styles from './InfoCard.module.css';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'moment';
import {CategoryScale} from 'chart.js'; 
import {Line, Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);


function InfoCard() {

  const[dailyData, setDailyData] = useState([]);

  const[quote, setQuote] = useState([]);

  const getStockData = async () => {
    const api = await fetch(`https://api.twelvedata.com/time_series?symbol=AMPL&interval=1day&format=JSON&apikey=ef6d325096324b31b500fe5987ab162d`
    );
  const fetcheddata = await api.json();

  const reversed_data  = fetcheddata.values.reverse();

  setDailyData(reversed_data);


};

    const getQuote = async () => {
      const quote_api = await fetch(`https://api.twelvedata.com/quote?symbol=AAPL&apikey=ef6d325096324b31b500fe5987ab162d`
      );

    const fetchedquote = await quote_api.json();

    setQuote(fetchedquote);

    console.log(fetchedquote);

    };

useEffect(() => {
  getStockData();
}, []);

useEffect(() => {
  getQuote();
}, []);


const volume_data = {
  labels: dailyData?.map(item => Moment(item.datetime).format('MM-DD-YYYY')),
  datasets: [
    {
      label: "Volume",
      data: dailyData?.map(item => item.volume),
      fill:true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
}

const mapped_data = {
  labels: dailyData?.map(item => Moment(item.datetime).format('MM-DD-YYYY')),
  datasets: [
  {
      label:"Open",
      data: dailyData?.map(item => item.open),
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
  },
  {
      label:"Closing",
      data: dailyData?.map(item => item.close),
      fill: true,
      borderColor: "#742774"
  },
  {
    type: 'bar',
    label:"High",
    data: dailyData?.map(item => item.high),
    fill: true,
    backgroundColor: "#ffffff"
  },
  {
    type: 'bar',
    label:"Low",
    data: dailyData?.map(item => item.low),
    fill: true,
    backgroundColor: "#daf3f8"
  }
]
};

  return (
    <div>
        <div className={styles.mainContainer1}>
        <h1 className={styles.headerCard1}>Current Price</h1>
        <h1 className={styles.header2Card1}>Previous Price</h1>
        <h2 className={styles.generalInfo}>General Information</h2>
        <h2 className={styles.adjustedRate}>Adjusted Rate</h2>
        <h3 className={styles.symbol}>Symbol</h3>
        <h3 className={styles.change}>Change</h3>
        <h3 className={styles.name}>Name</h3>
        <h3 className={styles.percent}>Percent</h3>
        <h3 className={styles.currency}>Currency</h3>

        <h1 className={styles.currentPrice}>{quote.close}</h1>
        <h1 className={styles.previousPrice}>{quote.previous_close}</h1>
        <h3 className={styles.symbolContent}>{quote.symbol}</h3>
        <h3 className={(quote.change >= 0 )? styles.ChangeContentPos : styles.ChangeContentNeg }>{quote.change}</h3>
        <h3 className={(quote.percent_change >= 0 )? styles.percentContentPos : styles.percentContentNeg }>{quote.percent_change}</h3>
        <h3 className={styles.nameContent}>{quote.name}</h3>
        <h3 className={styles.currencyContent}>{quote.currency}</h3>

        <div className={styles.volumeGraph}>
          <Line 
                    data={volume_data}  />
        </div>
      </div>
      <div className={styles.mainContainer2}>
        <h1 className={styles.headerCard2}>Stock Price</h1>
        <SLink to={'/dashboard/'}>
          <h3  className={styles.daily}>Daily</h3>
        </SLink>
        <SLink to={'/dashboard/weekly/'}>
          <h3 className={styles.weekly}>Weekly</h3>
        </SLink>
        <SLink  to={'/dashboard/monthly/'}>
          <h3 className={styles.monthly}>Monthly</h3>
        </SLink>
        <div className={styles.graphContainer}>
            <Line 
                  data={mapped_data}  />
        </div>
      </div>
    </div>
  );
}

const SLink = styled(NavLink)`
  text-decoration:none;
  cursor: pointer;
  transform: scale(0.8);

  svg{
      font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(35deg,
      #494949, #995b14);
      svg{
          color:green;
      }
      h3{
        color: orange;
      }
}
`;


export default InfoCard;