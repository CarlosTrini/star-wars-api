import {useState} from 'react';


const useScrollTop = () => {
  //state
  const [showUp, setShowUp] = useState(false);

 //muestra el botón de "desplazamiento" hacia arriba cuando el usuario ha bajado más de su viewport height
    window.addEventListener('scroll', () => {
      const show = window.scrollY >= window.innerHeight ? true : false;
      setShowUp(show);
    });

  return {
    showUp
  }
}

export default useScrollTop;