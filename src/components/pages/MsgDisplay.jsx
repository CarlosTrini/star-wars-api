import React from 'react';

import styles from '@styles/sass/modules/MsgDisplay.module.scss';

import blende from '@images/blende.png';


const MsgDisplay = () => {
  return (
    <>
      <figure className={styles.msg_empty_img}>
        <img src={blende} alt="" />
      </figure>
      <h2 className={styles.msg_empty_msg}>Aún no hay información...</h2>
    </>
  )
}

export default MsgDisplay