import axios from 'axios';

export const REQUEST_JOKE = 'REQUEST_JOKE';
export const RECEIVE_JOKE = 'RECEIVE_JOKE';

const API_URL = 'http://localhost:3333/api';

export const requestJoke = () => ({
  type: REQUEST_JOKE,
});

export const receiveJoke = (joke) => ({
  type: RECEIVE_JOKE,
  joke,
});

export const fetchRandomJoke = () => async (dispatch) => {
  dispatch(requestJoke());

  try {
    const response = await axios.get(`${API_URL}/jokes/random`);
    console.log(response.data)
    dispatch(receiveJoke(response.data));
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
};

export const fetchProgrammingJoke = () => async (dispatch) => {
  dispatch(requestJoke());

  try {
    const response = await axios.get(`${API_URL}/jokes/programming`);
    console.log(response.data)
    dispatch(receiveJoke(response.data));
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
};

export const fetchScienceJoke = () => async (dispatch) => {
  dispatch(requestJoke());

  try {
    const response = await axios.get(`${API_URL}/jokes/science`);
    console.log(response.data)
    dispatch(receiveJoke(response.data));
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
};

export const fetchPunsJoke = () => async (dispatch) => {
    dispatch(requestJoke());
  console.log('HIII')
    try {
      const response = await axios.get(`${API_URL}/jokes/puns`);
      console.log(response.data)
      dispatch(receiveJoke(response.data));
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  
  export const fetchKnockJoke = () => async (dispatch) => {
    dispatch(requestJoke());
  
    try {
      const response = await axios.get(`${API_URL}/jokes/knockknock`);
      console.log(response.data)
      dispatch(receiveJoke(response.data));
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };
  
