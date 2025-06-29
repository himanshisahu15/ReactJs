const { createStore, combineReducers,applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");


const ADD_CART = "ADD_CART";
const REMOVE_CART = "REMOVE_CART";
const CUSTOMER_NAME = "CUSTOMER_NAME";


const addToCart = (price) => ({
  type: ADD_CART,
  payload: price
});

const removeFromCart = (price) => ({
  type: REMOVE_CART,
  payload: price
});

const setCustomerName = (name) => ({
  type: CUSTOMER_NAME,
  payload: name
});


// const data={
//     balance:0,
//     userName:"Himanshi"
// }


// const reducer=(state=data,action)=>{
//     switch(action.type){
//         case "ADD_CART":
//             return {
//         ...state,
//         balance: state.balance + action.payload
//       };
//         case "REMOVE_CART":
//                return {
//         ...state,
//         balance: state.balance - action.payload
//       };
//         case "CUSTOMER_NAME":
//            return {
//         ...state,
//         userName: action.payload
//       }; 
//         default:
//         return state;
//     }
// }



const cartReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_CART:
      return state + action.payload;
    case REMOVE_CART:
      return state - action.payload;
    default:
      return state;
  }
};

const customerReducer = (state = "Himanshi", action) => {
  switch (action.type) {
    case CUSTOMER_NAME:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cartTotal: cartReducer,
  customerName: customerReducer
});



const logger=createLogger({
  
  diff:true,
duration :true, 
  timestamp:true,

});


const store = createStore(rootReducer,applyMiddleware(logger));


const unsubscribe = store.subscribe(() => {
  console.log("Cart State:", store.getState());
});


store.dispatch(addToCart(1000));        
store.dispatch(addToCart(500));         
store.dispatch(removeFromCart(500));   
store.dispatch(setCustomerName("Mahi")); 
store.dispatch(addToCart(1000));        

unsubscribe();
