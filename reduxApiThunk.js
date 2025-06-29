import axios from "axios";

import { createStore, combineReducers, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";

import { thunk } from "redux-thunk";



const ADD_CART = "ADD_CART";
const REMOVE_CART = "REMOVE_CART";
const CUSTOMER_NAME = "CUSTOMER_NAME";


const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

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


// const logger=createLogger({
  
//   diff:true,
// duration :true, 
//   timestamp:true,

// });

const fetchApi = () => {
  return (dispatch) =>{
    dispatch({ type: FETCH_PRODUCT_REQUEST });

    return axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        dispatch({
          type: FETCH_PRODUCT_SUCCESS, 
          payload: response.data.products,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCT_FAILURE, 
          payload: error.message,
        });
      });
  };
};





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


const initialProductState={
    data:[],
    loading:false,
    error:null,
}

const productReducer=(state=initialProductState,action)=>{

    switch(action.type){
        case FETCH_PRODUCT_REQUEST:
            return{
                ...state,loading:true,error:null
            };
        case FETCH_PRODUCT_SUCCESS:
            return{
                ...state,loading:false,data:action.payload
            };
        case FETCH_PRODUCT_FAILURE:
            return{
                ...state,loading:false,error:action.payload
            };
        default:
        return state;
    }
}

const rootReducer = combineReducers({
  cartTotal: cartReducer,
  customerName: customerReducer,
  productData:productReducer
});



const store = createStore(rootReducer,applyMiddleware(thunk));


const unsubscribe = store.subscribe(() => {
//   console.log("Cart State:", store.getState());
const state=store.getState();
console.log("Cart State:",state);
   console.log("Products:", state.productData.data);
});


store.dispatch(addToCart(1000));        
store.dispatch(addToCart(500));         
store.dispatch(removeFromCart(500));   
store.dispatch(setCustomerName("Mahi")); 
store.dispatch(addToCart(1000));     


store.dispatch(fetchApi()).then(() => {
  unsubscribe();
});

