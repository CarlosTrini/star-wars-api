import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import styles from '@styles/sass/modules/CharacterDetails.module.scss';

const CharacterDetails = ({ character }) => {

  useEffect(() => window.scrollTo(0,0), [])

  return (
    <>
      <main className={styles.details}>
        <h2 className={styles.details_title}>Información de: {character.name}</h2>
        <div className={styles.details_character}>
          <p>Peso: <span>{character.mass}</span></p>
          <p>Altura: <span>{character.height}</span></p>
          <p>Cabello: <span>{character.hair_color}</span></p>
          <p>Piel: <span>{character.skin_color}</span></p>
          <p>Ojos: <span>{character.eye_color}</span></p>
          <p>Piel: <span>{character.skin_color}</span></p>
          <p>Fecha nacimiento: <span>{character.birth_year}</span></p>
          <p>Género: <span>{character.gender}</span></p>
          <Link to="/" className={styles.details_back_link}>Home</Link>
        </div>
      </main>
    </>
  )
}

export default CharacterDetails;