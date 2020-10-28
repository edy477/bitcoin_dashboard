
import  {SelectCoin} from "../Actions/CoinsActions";

const initState = {
    coin: 1
};
export default function (state=initState,action) {
    switch (action.type) {
        case "SEL_COIN":{

                return {...state, coin: action.payload};
        }
        default:
            return state;

    }

}
