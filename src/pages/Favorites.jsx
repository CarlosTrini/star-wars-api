import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFavoritesAct } from '@features/redux/starWarsReducer/actions';

import CardContainer from '@components/pages/CardContainer';

import styles from '@styles/sass/modules/Favorites.module.scss';

import MsgDisplay from '@components/pages/MsgDisplay';

const Favorites = () => {

  //redux
  const { favorites } = useSelector(state => state.starWarsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0,0);
    dispatch(getFavoritesAct());
  }, []);
  
  return (
    <>
      <main className={styles.favorites}>
        {
          (favorites?.length > 0) 
          ? <CardContainer characters={favorites} favorites={true} />
          : <MsgDisplay msg="Aún no has seleccionado un favorito" />
        }
      </main>
    </>
  )
}

export default Favorites