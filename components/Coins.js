import axios from 'axios';
import {useState,useEffect} from 'react';
import CoinCard from "./CoinCard";
import {useSelector} from "react-redux";

const Coins = () => {

    const [data, setData] = useState({ data: [] });
    const  [coins,setCoins] = useState({coins :[]});
    const state = useSelector(state => state);

//https://api.coinranking.com/v1/public/coins?base=EUR&timePeriod=7d
const str ='https://api.coinranking.com/v1/public/coins?base='+state.BaseReducer.base.toString()+'&timePeriod=7d';
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(str);

            setData({data:result.data.data});
            setCoins({coins: result.data.data.coins});
        };

        fetchData();
    }, [str]);

    /*
    * useEffect(() => {
   async function fetchMyAPI() {
     let url = 'http://something/' + productId;
     let config = {};
     const response = await myFetch(url);
     console.log(response);
   }

   fetchMyAPI();
 }, [productId]);
 *  useEffect(async () => {
         const result = await axios(
             str,
         );

         setData({data:result.data.data});
         setCoins({coins: result.data.data.coins});
     }, [state.BaseReducer.base]);
    * */




  //  console.log(cst);



//console.log(cst);
  //  coins.coins.map(item => console.log(item.change));

    return(
        <div className="Coins overflow-y-auto  h-screen">
            <ul className="coins-list flex flex-col pl-8 space-y-2 pr-10 overflow-y-auto">
                {coins.coins.map(item => (<li className="coins-li border-solid border border-gray-300 rounded-sm pl-2 pt-2 pb-2 h-12  w-4/5 h-16">

                  <CoinCard change={item.change} symbol={item.symbol} price={item.price} id={item.id}/>
                </li>))}
            </ul>
<h1>Coins</h1>



        </div>
    )
}


export default Coins;