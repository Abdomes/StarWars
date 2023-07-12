import { omit } from "lodash";
import { getLocalStorage } from "@utils/localStorage";
import { REMOVE_PERSON_FROM_FAVORITE, ADD_PERSON_TO_FAVORITE } from "@store/constants/actionTypes"

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
   switch (action.type) {
      case REMOVE_PERSON_FROM_FAVORITE:
         return omit(state, [action.payload]);
      case ADD_PERSON_TO_FAVORITE:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state;
   }
}

export default favoriteReducer;