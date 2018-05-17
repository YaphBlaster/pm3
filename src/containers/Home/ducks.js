//ACTIONS
const REMOVE_MEME = "REMOVE_MEME";
const ADD_MEME = "ADD_MEME";
const REPLACE_MEMES = "REPLACE_MEMES";
const CLEAR_MEMES = "CLEAR_MEMES";

const initialState = {
  memes: []
};

// Reducer input === current state
// Reducer output === new state

//REDUCER
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEME: {
      return {
        ...state,
        memes: [...state.memes, action.memeId]
      };
    }
    case REPLACE_MEMES: {
      return {
        ...state,
        memes: action.memes
      };
    }
    case CLEAR_MEMES: {
      return {
        ...state,
        memes: []
      };
    }
    default:
      return state;
  }
}

//ACTION CREATORS
export function addMeme(memeId) {
  return {
    type: ADD_MEME,
    memeId
  };
}

export function replaceMemes(memes) {
  return {
    type: ADD_MEME,
    memes
  };
}

export function clearMemes() {
  return {
    type: CLEAR_MEMES
  };
}
