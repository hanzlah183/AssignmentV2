import { animalActionType } from "./animalType";
import axios from "axios";

const API =
  "https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json";

export const getAllAnimals = () => async dispatch => {
  try {
    const res = await axios.get(API);
    dispatch({
      type: animalActionType.GET_ANIMALS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: animalActionType.ANIMAL_ERROR,
      payload:  {error:'Something Wrong While Accessing API'}
    });
  }
};
