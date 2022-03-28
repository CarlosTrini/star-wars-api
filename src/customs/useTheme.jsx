import  {useEffect} from 'react';

import {useDispatch } from 'react-redux';

import {changeThemeAct} from '@features/redux/starWarsReducer/actions';

const useTheme = () => {

  //redux
  const dispatch = useDispatch();

  //revisa si el usuario tiene tema oscuro como preferencia
  useEffect(() => {
    if (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return dispatch(changeThemeAct());
    }
  }, []);

  return {}
}

export default useTheme;