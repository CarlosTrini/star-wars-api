import {useState, useEffect} from 'react';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { changeThemeAct } from '@features/redux/starWarsReducer/actions';

const useNavBar = () => {

  //redux 
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.starWarsReducer);

  //react router
  const {pathname} =  useLocation();

  //state
  const [back, setBack] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname.split('/')[1])

  //ejecuta la acción para cambio de tema manualmente
  const handleTheme = () =>  dispatch(changeThemeAct());

  //revisa si hay un scroll para colocar el fondo a la navegación
  window.addEventListener('scroll', () => setBack(scrollY >=10 ? true : false)); 

  //revisa los cambios de ruta
  useEffect(() => {
    setCurrentPath(pathname.split('/')[1]);
  }, [pathname])
  
  return {
    currentPath,
    back,
    theme,
    handleTheme
  }
}

export default useNavBar;