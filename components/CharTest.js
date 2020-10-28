import {useState,useEffect} from 'react';
import {Line} from "react-chartjs-2";
import axios from 'axios';
import TimeBar from "./TimeBar";
import { ASAP } from 'downsample';
import {useSelector } from "react-redux";


const ChartTest = () => {
     const [data,setData] = useState({data:[]});
    const [ dataChart, setDataChart ] = useState ( {} );
    const state = useSelector(state => state);
    const coin = useSelector(state => state);
    const [period,setPeriod] = useState('7d');
    console.log(coin.CoinsReducer.coin);
    const [timeframe,setTimeframe] = useState({history:[]});


    const  options = {


        scales:{
            xAxes: [{
                type: 'time',
                gridLines: {
                    display: true,
                    borderDash: [5, 15],
                    lineWidth:1.5
                },
                time: {
                    unit: 'day',
                    tooltipFormat: 'lll',

            },
                ticks: {
                    fontFamily:  'Roboto',
                    fontWeight:'bold',
                    fontSize:14
                }

            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    borderDash: [5, 15],
                    lineWidth:1.5
                },
                ticks: {
                    display: false
                }
            }]
        }
        }






//https://api.coinranking.com/v1/public/coin/1/history/7d?base=EUR
const str = 'https://api.coinranking.com/v1/public/coin/'+state.CoinsReducer.coin.toString()+'/history/7d?base=EUR';
    console.log(str);
const str2 = 'https://api.coinranking.com/v1/public/coin/1?base=EUR&timePeriod=7d';
/*
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(str2);
            const res = await axios(str);
        const dts = [];
        const dtr = [];
       res.data.data.history.filter((item) =>  dts.push(item.price));
       res.data.data.history.filter((item) =>  dtr.push(item.timestamp));
           setData({data:result.data.data.coin});

             setDataChart({
            labels: dtr,

            datasets: [{
                label: 'Confirmed cases',
                fill: false,
                data:  dts,
                borderColor: "#4848a1",
                pointRadius: 0






            }

            ]
        });
        };

        fetchData();
    }, [str]);
    */
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(str2);
            const res = await axios(str);
            const dts = [];
            const dtr = [];
            res.data.data.history.filter((item) =>  dts.push(item.price));
            res.data.data.history.filter((item) =>  dtr.push(item.timestamp));
            setData({data:result.data.data.coin});

            setDataChart({
                labels: dtr,

                datasets: [{

                    fill: false,
                    data:  dts,
                    borderColor: "#4848a1",
                    pointRadius: 0






                }

                ]
            });
        };

        fetchData();
    }, [str]);
    /*
    useEffect(async () => {
        const result = await axios(
            'https://api.coinranking.com/v1/public/coin/1?base=EUR&timePeriod=7d',

        );

        const res = await axios(
            'https://api.coinranking.com/v1/public/coin/1/history/7d?base=EUR',

        );

        const dts = [];
        const dtr = [];
       res.data.data.history.filter((item) =>  dts.push(item.price));
       res.data.data.history.filter((item) =>  dtr.push(item.timestamp));

        setData({data:result.data.data.coin});

        setDataChart({
            labels: dtr,

            datasets: [{
                label: 'Confirmed cases',
                fill: false,
                data:  dts,
                borderColor: "#4848a1",
                pointRadius: 0






            }

            ]
        });

    }, []);
*/

    return(
        <div id="chart">


<TimeBar/>
            <Line data={ dataChart }

                    options ={options}
            />

        </div>
    )
}
/*
*    <div className="flex flex-row space-x-5 mt-10 mb-4 bg-white h-12">
            <div className="CardPrice">
                <h1>Base : {state.BaseReducer.base}</h1>
                <h1>{data.data.name} ( {data.data.symbol} ) Price Chart</h1>
                {data.data.price}
            </div>

                <div className="MarketCap border-solid border border-gray-300 rounded">
                    <h1>Market Cap</h1>
                    <h1>{data.data.marketCap}</h1>
                </div>
                <div className="Volume">
                    <h1>Volume</h1>
                    <h1>{data.data.volume}</h1>
                </div>
            </div>*/
export default  ChartTest;