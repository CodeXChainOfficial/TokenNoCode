// actions.ts
export enum ActionTypes {
    TOGGLE_CHAIN = 'TOGGLE_CHAIN',
  }
  
  export interface ToggleChainAction {
    type: ActionTypes.TOGGLE_CHAIN;
    payload: {
      chain: string; // Replace 'string' with the appropriate type for your chain
    };
  }
  
  export const toggleChain = (chain: string): ToggleChainAction => ({
    type: ActionTypes.TOGGLE_CHAIN,
    payload: { chain },
  });
  