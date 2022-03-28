import React from 'react';

import CardItem from './CardItem';

import styles from '@styles/sass/modules/CardContainer.module.scss';

const CardContainer = ({ characters, favorites = false }) => {

  return (
    <>
      <main className={`${styles.main_card} container`}>
        <h2 className={styles.main_card_title}> {favorites ? 'Tus favoritos' : 'Personajes'}  </h2>
        <section className={`${styles.card_container}`}>
          {
            characters.map((character, i) => <CardItem key={i + 1} character={character} favorites={favorites} />)
          }
        </section>
      </main>
    </>
  )
}

export default CardContainer;