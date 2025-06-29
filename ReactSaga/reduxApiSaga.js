import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga.js";


 const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
 const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
 const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

export const fetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (product) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product
});

export const fetchProductFailure = (error) => ({
  type:FETCH_PRODUCT_FAILURE,
  payload: error
});


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




const sagaMiddleware=createSagaMiddleware();
const store = createStore(productReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

 store.subscribe(() => {
const state=store.getState();
    console.log("Loading:", state.loading);
  console.log("Products:", state.data);
  console.log("Error:", state.error);
});


    
store.dispatch(fetchProductRequest());

