import React from 'react';

import { Link } from 'react-router-dom';

import styles from '@styles/sass/modules/NotFound.module.scss';

const NotFound404 = () => {
  return (
    <main className={styles.not_found}>
      <div className={styles.not_found_info}>
        <p>404!</p>
        <p>NOT FOUND </p>
        <p>No hemos podido encontrar esta página</p>
        <Link to="/" className={styles.back_home}>Regresar</Link>
      </div>

    </main>
  )
}

export default NotFound404;