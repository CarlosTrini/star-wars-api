import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MsgDisplay from '@components/pages/MsgDisplay';
import CharacterDetails from '@components/pages/CharacterDetails';
import { getOneCharacterAct } from '@features/redux/starWarsReducer/actions';


const Character = () => {
  //params
  const { name } = useParams();

  //redux
  const dispatch = useDispatch();
  const { oneCharacter } = useSelector(state => state.starWarsReducer);

  useEffect(() => dispatch(getOneCharacterAct(name)), [name]);

  return (
    <>
      {
        oneCharacter?.name
          ? <CharacterDetails character={oneCharacter} /> 
          : <MsgDisplay />
      }
    </>
  )
}

export default Character;