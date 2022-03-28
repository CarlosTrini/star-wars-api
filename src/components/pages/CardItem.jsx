import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addFavoriteAct, removeFavoriteAct } from '@features/redux/starWarsReducer/actions';

import styles from '@styles/sass/modules/CardItem.module.scss';

import favoriteIcon from '@images/favorite.svg';
import deleteIcon from '@images/delete.svg';

const CardItem = ({ character, favorites }) => {
  //destructuracion de personaje
  const { name, height, mass, birth_year, url } = character;
  //redux
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.starWarsReducer);

  //agregar y eliminar de favoritos
  const handleAdd = () => dispatch(addFavoriteAct({ name, height, mass, birth_year }));
  const handleDelete = () => dispatch(removeFavoriteAct(name));


  return (
    <div
      className={`${styles.card}  ${theme ? styles.shadow_dark : styles.shadow_light}`}
    >
      <div className={`${styles.card_img}`}></div>
      <div className={styles.card_info}>
        {
          favorites
            ? <button
              className={styles.card_info_favorite}
              onClick={handleDelete}
            >
              <figure>
                <img src={deleteIcon} alt="add favorite icon" title="click para eliminar" />
              </figure>
            </button>

            : <button
              className={styles.card_info_favorite}
              onClick={handleAdd}
            >
              <figure>
                <img src={favoriteIcon} alt="add favorite icon" title="click para agregar" />
              </figure>
            </button>
        }

        <h3>Nombre: <span>{name}</span></h3>
        <p>Altura: <span>{height} cm</span></p>
        <p>Peso: <span>{mass}</span></p>
        <p>Nacido: <span>{birth_year}</span></p>
        <Link to={`/character/${name}`} className={styles.card_link}>Ver más...</Link>
      </div>
    </div>
  )
}

export default CardItem