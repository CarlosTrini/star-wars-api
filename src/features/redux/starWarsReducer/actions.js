import TYPES from "./types";
import { getData, getOneCharacter } from "@helpers/requestApi";

const pathPeople = "/people";

// ++++++++++++++++++++++++++ ACCIONES
const getCharactersAct = (page = 1) => {
  return async (dispatch) => {
      const response = await getData(`${pathPeople}?page=${page}`); // peticion a la página correspondiente
      page === 1 && dispatch(getDispatch(response)); // la primera vez...
      page > 1 && dispatch(loadDispatch(response)); // a partir de la segunda página...
  };
};

const getOneCharacterAct = (name) => {
  return async (dispatch) => {
      const response = await getOneCharacter(`${pathPeople}?search=${name}`);
      dispatch(getOneDispatch(response));
  };
};

const getFavoritesAct = () => ({
  type: TYPES.GET_FAVORITES,
});

const addFavoriteAct = (newFavorite) => ({
  type: TYPES.ADD_FAVORITE,
  payload: newFavorite,
});

const removeFavoriteAct = (name) => ({
  type: TYPES.REMOVE_FAVORITE,
  payload: name,
});

const changeThemeAct = () => ({
  type: TYPES.CHANGE_THEME,
});

const resetPageAct = () => ({
  type: TYPES.RESET_PAGE
})

//+++++++++++++++++++++++++ DISPATCHS  complementos de acciones

// dispatch de getCharactersAct
const getDispatch = ({ next, results }) => ({
  type: TYPES.GET_CHARACTERS,
  payload: { characters: results, nextPage: next },
});

const loadDispatch = ({ next, results }) => ({
  type: TYPES.LOAD_CHARACTERS,
  payload: { characters: results, nextPage: next },
});

// dispatch de getOneCharacterAct 
const getOneDispatch= (character) => ({
  type: TYPES.GET_ONE_CHARACTER,
  payload: character
});

export {
  addFavoriteAct,
  getCharactersAct,
  changeThemeAct,
  removeFavoriteAct,
  getFavoritesAct,
  getOneCharacterAct,
  resetPageAct
};
