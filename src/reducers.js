import { combineReducers } from "redux";
import { reducer as episodeSelector } from "./components/EpisodeSelector/ducks";
import { reducer as memeCart } from "./containers/Home/ducks";

const rootReducer = combineReducers({ episodeSelector, memeCart });
export default rootReducer;
