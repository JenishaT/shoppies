import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root.reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

export const store = createStore(rootReducer, compose(	
  applyMiddleware(...middleware),	
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()	
));