import hotSauceJSON from '../../Data/hotsauces.json';
let initialState = hotSauceJSON.list;
const ADD_SAUCE = 'ADD_SAUCE';
const REMOVE_SAUCE = 'REMOVE_SAUCE';
const UPDATE_SAUCE = 'UPDATE_SAUCE';
const REORDER_SAUCES = 'REORDER_SAUCES';

export const addSauce = (sauce) => ({
  type: ADD_SAUCE,
  payload: sauce,
});

export const removeSauce = (sauceID) => ({
  type: REMOVE_SAUCE,
  payload: sauceID,
});

export const updateSauce = (sauce) => ({
  type: UPDATE_SAUCE,
  payload: sauce,
});

export const reorderSauces = (list) => ({
  type: REORDER_SAUCES,
  payload: list,
});

export const hotSauceState = (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case ADD_SAUCE: return [...state, payload];
    case REMOVE_SAUCE: return state.filter(hotSauce => hotSauce.id !== payload);
    case UPDATE_SAUCE: return state.map(hotSauce => hotSauce.id === payload.id ? payload: hotSauce);
    case REORDER_SAUCES: return payload;
    default: return state;
  }
};