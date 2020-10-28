import  {SelectBase } from "../Actions/Actions";

 const initState = {
    base: "USD"
};
 export default function (state=initState,action) {

     switch(action.type) {

         case "SEL_BASE" :
         {
             return {...state, base: action.payload};

         }

             /*{

             return {...state, base: action.payload};
         }*/

         default:
             return state;


     }
}