import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directoryReducer";
import collectionReducer from "./collection/collectionReducer";

import userReducer from "./user/UserReducer";
import cartReducer from "./cart/cartReducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
//   timeout: null,
// };

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collection: collectionReducer,
});
// export default persistReducer(persistConfig, rootReducer);
