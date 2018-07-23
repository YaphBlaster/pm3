import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, reducer);

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(pReducer, enhancers);
export const persistor = persistStore(store);
export default store;
