
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {SelectBase} from "./Actions/Actions";

const Basebar = () =>  {
    const [base,setBase] = useState({base: ""})
   const dispatch = useDispatch();

    const handleSelection = (e) =>{
       //console.log(e.target.value);
      setBase(e.target.value.toString());

      dispatch(SelectBase(e.target.value.toString()));

    }


    return (
        <div className="basebar pl-8 mt-2 ">
              <ul className="baselist pl-1 pt-1  flex flex-row   space-x-2 w-3/5 rounded border-solid border border-gray-400 mb-3">
                  <li>
                      <button className="rounded px-2 py-2" value="USD" onClick={handleSelection}>USD</button>

                  </li>
                  <li>   <button className="rounded px-2 py-2" value="EUR"  onClick={handleSelection}>EUR</button></li>
                  <li>   <button  className="rounded px-2 py-2" value="JPY" onClick={handleSelection}>JPY</button> </li>
              </ul>

        </div>
    )
}
export default  Basebar;