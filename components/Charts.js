
import {useSelector} from "react-redux";
import ChartTest from "./CharTest";

const Charts = () => {

    const state = useSelector (state => state.BaseReducer.base);
    //            <h1>{state.base}</h1>
    console.dir(state)
    return(
        <div className="border-solid border-t border-b border-gray-400">


<ChartTest/>
        </div>
    )
}
export default Charts