import React from 'react';

import AppRoutes from '@routes/AppRoutes';
import useScrollTop from '@customs/useScrollTop';
import useTheme from '@customs/useTheme';

import styles from '@styles/sass/modules/App.module.scss';

import up from '@images/up.svg';

const App = () => {
  //customs
  const {showUp} = useScrollTop();
  useTheme();

  return (
    <>
      {
        showUp && <button
          className={styles.up_button}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={up} alt="click para ir al inicio" />
        </button> 
      }
      <AppRoutes />
    </>
  )
}

export default App