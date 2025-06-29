const { createStore,combineReducers } = require("redux");

const WITHDRAW="WITHDRAW";
const DEPOSITE ="DEPOSITE";
const CHANGE_USERNAME="CHANGE_USERNAME";

const withdrawAmount=(amount)=>{
    return{
        type:WITHDRAW,
        payload:amount
    };
}

const depositeAmount=(amount)=>{
    return{
        type:DEPOSITE,
        payload:amount
    };
}

const changeUsername=(newName)=>{
    return{
        type:CHANGE_USERNAME,
        payload:newName
    }
}



// const data={
//     balance:0,
//     userName:"Himanshi"
// }


// const reducer=(state=data,action)=>{
//     switch(action.type){
//         case "DEPOSITE":
//             return {
//         ...state,
//         balance: state.balance + action.payload
//       };
//         case "WITHDRAW":
//                return {
//         ...state,
//         balance: state.balance - action.payload
//       };
//         case "CHANGE_USERNAME":
//            return {
//         ...state,
//         userName: action.payload
//       }; 
//         default:
//         return state;
//     }
// }


const amountReducer=(state=0,action)=>{
 switch(action.type){
        case "DEPOSITE":
            return state + action.payload;
      
        case "WITHDRAW":
               return state - action.payload;
      
default:
       return state;
}
}


const usernameReducer=(state="Himanshi",action)=>{
    switch(action.type){
        case "CHANGE_USERNAME":
           return action.payload;
      
        default:
        return state;
    }
};


const rootReducer=combineReducers({
    balance:amountReducer,
    userName:usernameReducer
});




const store=createStore(rootReducer);

const unsubscribe=store.subscribe(()=>{
    console.log("Updated State:",store.getState());
});

store.dispatch(depositeAmount(1000));
store.dispatch(withdrawAmount(500));
store.dispatch(changeUsername("Mahi"));
store.dispatch(depositeAmount(2000));

unsubscribe();