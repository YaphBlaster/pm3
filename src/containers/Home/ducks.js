const arrayMove = require("array-move");

//ACTIONS
const ADD_MEME = "ADD_MEME";
const REMOVE_MEME = "REMOVE_MEME";
const REPLACE_MEMES = "REPLACE_MEMES";
const CLEAR_MEMES = "CLEAR_MEMES";
const ADD_TEXT = "ADD_TEXT";
const MOVE_MEME = "MOVE_MEME";

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
        memes: [
          ...state.memes,
          {
            memeID: action.memeId,
            text: "",
            randomizer: Math.random()
              .toString()
              .replace(".", "")
          }
        ]
      };
    }
    case REMOVE_MEME: {
      for (let i = 0; i < state.memes.length; i++) {
        if (state.memes[i].randomizer == action.randomizer) {
          let newArray = state.memes.slice();
          newArray.splice(i, 1);
          return {
            ...state,
            memes: newArray
          };
        }
      }
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

    case ADD_TEXT: {
      for (let i = 0; i < state.memes.length; i++) {
        if (state.memes[i].randomizer == action.randomizer) {
          let newArray = state.memes.slice();
          newArray[i].text = action.text;
          return {
            ...state,
            memes: newArray
          };
        }
      }
    }

    case MOVE_MEME: {
      const newArray = arrayMove(state.memes, action.oldIndex, action.newIndex);
      return {
        ...state,
        memes: newArray
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

//ACTION CREATORS
export function removeMeme(memeId, randomizer) {
  return {
    type: REMOVE_MEME,
    memeId,
    randomizer
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

export function addText(text, randomizer) {
  return {
    type: ADD_TEXT,
    text,
    randomizer
  };
}

export function moveMeme(oldIndex, newIndex) {
  return {
    type: MOVE_MEME,
    oldIndex,
    newIndex
  };
}
