import { combineReducers } from "redux";
import { reducer as episodeSelector } from "./components/EpisodeSelector/ducks";

const rootReducer = combineReducers({ episodeSelector: episodeSelector });
export default rootReducer;
