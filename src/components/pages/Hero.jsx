import React from 'react';

import {useSelector} from 'react-redux';

import styles from '@styles/sass/modules/Hero.module.scss';

const Hero = () => {
  //redux 
  const {theme} = useSelector(state => state.starWarsReducer);

  return (
    <>
      <div className={`${styles.hero} ${theme ? styles.img_day : styles.img_night}`} >
      </div>
    </>
  )
}

export default Hero;