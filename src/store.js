import { createStore} from "redux";
import counterReducer from "./components/Redux/reducer-counter";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(counterReducer,composeEnhancers());


export default store;