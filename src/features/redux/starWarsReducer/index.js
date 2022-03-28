import TYPES from "./types";
import initialState from "./state";

const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CHARACTERS:
      return {
        ...state,
        ...action.payload,
      };

    case TYPES.GET_ONE_CHARACTER:
      return {
        ...state,
        oneCharacter: action.payload
      };

    case TYPES.LOAD_CHARACTERS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload.characters],
        nextPage: action.payload.nextPage,
        currentPage: state.currentPage + 1,
      };

    case TYPES.GET_FAVORITES:
      //revisar storage para favoritos
      const getStorage = JSON.parse(localStorage.getItem("favorites"));
      const favorites = getStorage?.length > 0 ? getStorage : [];
      return {
        ...state,
        favorites,
      };

    case TYPES.ADD_FAVORITE:
      if (state.favorites.some((c) => c.name === action.payload.name))
        return { ...state };

      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return {
        ...state,
        favorites: newFavorites,
      }; // si no existe SI lo agrega

    case TYPES.REMOVE_FAVORITE:
      const updateFavorites = state.favorites.filter(
        (c) => c.name !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(updateFavorites));

      return {
        ...state,
        favorites: updateFavorites,
      };

    case TYPES.CHANGE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };

    case TYPES.RESET_PAGE:
      return {
        ...state,
        currentPage: 1
      }

    default:
      return state;
  }
};

export default starWarsReducer;
