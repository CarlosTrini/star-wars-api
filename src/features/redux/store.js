import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./root";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

//usado en lugar de las redux dev tool
// store.subscribe(() => {
//   // console.log(store.getState());
// })

export default store;


