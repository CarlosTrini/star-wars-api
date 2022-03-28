import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getCharactersAct, resetPageAct } from '@features/redux/starWarsReducer/actions';
import useObserver from '@customs/useObserver';
import Hero from '@components/pages/Hero';
import CardContainer from '@components/pages/CardContainer';

import styles from '@styles/sass/modules/Home.module.scss';

import upIcon from '@images/green_laser.png';
import downIcon from '@images/blue_laser.png';
import vader from '@images/darth_vader.png';
import blende from '@images/blende.png';


const Home = () => {

  //custom hook
  const { ref } = useObserver();

  //redux
  const dispatch = useDispatch();
  const { characters, nextPage } = useSelector(state => state.starWarsReducer);

  //solo se necesita una vez, para llenar el arreglo de personajes la primera carga...
  useEffect(() => {
    console.log(window.scrollTo(0,0));
    //si se visitan extraen todos los personajes en home y después se hace un cambio rápido entre la pagina 
    //home y favoritos, la currentpage en el state se actualiza a 10, y no es una ruta válida. reset page hace
    //que siempre que se cargue el componente, sea 1 y evitar ese error
    dispatch(resetPageAct()); 
    dispatch(getCharactersAct());
  }, []);

  return (
    <>
      <Hero />

      <section className={styles.bann}>
        <figure className={styles.bann_img}>
          <img src={upIcon} alt="laser green image" />
        </figure>
        <h1 className={styles.bann_title}>star wars</h1>
        <h2>"La Fuerza estará contigo. Siempre".<p>- Obi-Wan Kenobi</p></h2>
        <figure className={styles.bann_img}>
          <img src={downIcon} alt="laser blue image" />
        </figure>
      </section>

      <section className={`${styles.intro} container`}>
        <h3 className={styles.intro_title}>"Hace mucho tiempo en una galaxia muy, muy lejana".
          <span>Frase de apertura de la primera película de la saga</span>
        </h3>
        <div className={styles.intro_info}>
          <p>
            A pesar de que la mayoría de la gente considera a Star Wars como ciencia ficción, George Lucas ha declarado en numerosas ocasiones que estas películas no son de "ciencia ficción", principalmente porque la tecnología que muestra no tiene base científica. Así, serían de "aventura épica" y nada más.
          </p>
          <figure>
            <img src={vader} alt="" />
          </figure>
        </div>
      </section>


      {
        (characters?.length > 0) && <CardContainer characters={characters} />
      }

      <div className={styles.characters_ref}>
        <figure
          ref={ref}
          className={`${styles.characters_ref_end} ${nextPage && styles.loading}`}
        >
          <img src={blende} alt="end characters / loading" />
        </figure>
        <p>{nextPage ? 'Cargando Más Personajes' : 'Aún no hay más Personajes'}</p>
      </div>
    </>
  )
}

export default Home