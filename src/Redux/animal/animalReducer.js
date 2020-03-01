import { animalActionType } from "./animalType";

const INITIAL_STATE = {
  loading: true,
  name: [],
  error: {}
};

export const animalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case animalActionType.GET_ANIMALS:
      return {
        ...state,
        name: payload,
        loading: false
      };
    case animalActionType.ANIMAL_ERROR:
      return {
        ...state,
        error: payload,
        loading: true
      };

    default:
      return state;
  }
};
