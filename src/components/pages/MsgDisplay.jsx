import React from 'react';

import styles from '@styles/sass/modules/MsgDisplay.module.scss';

import blende from '@images/blende.png';


const MsgDisplay = ({msg}) => {
  return (
    <>
      <figure className={styles.msg_empty_img}>
        <img src={blende} alt="" />
      </figure>
      <h2 className={styles.msg_empty_msg}>{msg}</h2>
    </>
  )
}

export default MsgDisplay