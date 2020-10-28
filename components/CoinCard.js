
import {useDispatch} from "react-redux";
import {SelectCoin} from "./Actions/CoinsActions";

const CoinCard = ({symbol,change,price,id}) =>{
    const dispatch = useDispatch();

    const handleSelection = (e) =>{
        console.log(e.target.id);
        dispatch(SelectCoin(e.target.id.toString()))
    }



    return(
        <a href="#"  name={id} onClick={handleSelection}>

        <div>


            <label>{symbol} = </label> <span>{change}</span>
            <p className="text-xs text-gray-500" id={id}>1= {price}</p>


        </div> </a>
    )
}
export default  CoinCard;