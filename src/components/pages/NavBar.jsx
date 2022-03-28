import React from 'react';

import { Link} from 'react-router-dom';

import useNavBar from '@customs/useNavBar';

import styles from '@styles/sass/modules/NavBar.module.scss';

import logo from '@images/logo.png';
import sun from '@images/sun.svg';
import moon from '@images/moon.png';

const NavBar = () => {

  //custom
  const {currentPath, back, theme, handleTheme} = useNavBar();
  
  return (
    <>
      <header className={`${styles.header} ${back && styles.back} ${currentPath !== '' && styles.back}`}>
        <nav className={styles.nav}>
          <figure className={`${styles.nav_logo} ${!theme && styles.logo_dark}`}>
            <img src={logo} alt="Logo" />
          </figure>

          <ul className={styles.nav_links}>
            <li className={styles.link_item}><Link to="/">Home</Link></li>
            <li className={styles.link_item}><Link to="/favorites">Favoritos</Link></li>
            <li>
              <button
                onClick={handleTheme}
                className={styles.nav_btn_theme}>
                <img src={theme ? sun : moon} alt="change theme button" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar