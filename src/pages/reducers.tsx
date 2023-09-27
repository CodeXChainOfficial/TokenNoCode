// reducers.ts
import { ActionTypes, ToggleChainAction } from './actions';

const initialState = {
    selectedChains: [], // Define selectedChains in your initial state
  };

type Action = ToggleChainAction; // Add other action types as needed

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CHAIN:
      const { chain } = action.payload;
      if (state.selectedChains.includes(chain)) {
        return {
          ...state,
          selectedChains: state.selectedChains.filter((c) => c !== chain),
        };
      } else {
        return {
          ...state,
          selectedChains: [...state.selectedChains, chain],
        };
      }
    default:
      return state;
  }
};

export default rootReducer;
