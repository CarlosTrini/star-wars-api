import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import { getCharactersAct } from '@features/redux/starWarsReducer/actions';

const useObserver = () => {

  //redux
  const dispatch = useDispatch();
  const { nextPage, currentPage } = useSelector(state => state.starWarsReducer);

  // react-intersection-observer
  const { ref, inView, entry } = useInView({
    rootMargin: '-100px',
    threshold: 0
  });

  const handleCharacter = async () => dispatch(getCharactersAct(currentPage + 1));

  //Petición a API cada que el elemento observado es visible
   useEffect(() => {
    if (inView)  nextPage &&  handleCharacter();
  }, [inView]);

  return { ref }
}

export default useObserver;