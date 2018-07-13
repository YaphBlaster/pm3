//ACTIONS
const CHANGE_EPISODE = "CHANGE_EPISODE";

const initialState = {
  episode: 0,
  episodeText: "Episode I"
};

const episodeText = episode => {
  switch (episode) {
    case 0:
      return "Episode I";
    case 1:
      return "Episode II";
    case 2:
      return "Episode III";
    default:
      return "";
  }
};

// Reducer input === current state
// Reducer output === new state

//REDUCER
export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EPISODE: {
      return {
        ...state,
        episode: action.episode,
        episodeText: episodeText(action.episode)
      };
    }
    default:
      return state;
  }
}

//ACTION CREATORS
export function changedEpisode(episode) {
  return {
    type: CHANGE_EPISODE,
    episode
  };
}
