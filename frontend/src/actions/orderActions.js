import Axios from 'axios';
import {
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from '../constants/orderConstants';

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: ORDER_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/orders');
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
  }
};