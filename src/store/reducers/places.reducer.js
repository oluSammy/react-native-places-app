import Place from "../../models/place";
import { ADD_PLACE } from "../actions/places.actions";

const initState = {
  places: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(new Date().toString(), action.placeData.title);

      return {
        places: [...state.places, newPlace],
      };

    default:
      return state;
  }
};
