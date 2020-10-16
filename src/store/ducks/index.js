import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as packages } from "./packages";

export default history =>
  combineReducers({
    packages,
    router: connectRouter(history)
  });
