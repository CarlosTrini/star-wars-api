import axiosClient from "@configs/axiosClient";
import { timerAlert } from "./alerts";

const getData = async (url) => {
  try {
    const response = await axiosClient.get(url)
    const { next, results } = response.data;
    return { next, results };
  } catch (error) {
    error?.code === 'ECONNABORTED' 
    ? timerAlert('info', 'Se ha exedido el limite de tiempo de 30s para la petición, revisa tu conexión a internet')
    : timerAlert('info', 'Ha ocurrido un error, intenta más tarde');
    throw new Error(error);
  }
  
};

const getOneCharacter = async (url) => {
  try {
    const response = await axiosClient.get(url);
    return response.data.results[0]
  } catch (error) {
    error?.code === 'ECONNABORTED' 
    ? timerAlert('info', 'Se ha exedido el limite de tiempo de 30s para la petición, revisa tu conexión a internet')
    : timerAlert('info', 'Ha ocurrido un error, intenta más tarder');
    throw new Error(error);
  }
}

export { getData, getOneCharacter };
