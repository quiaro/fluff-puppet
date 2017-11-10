import axios from 'axios';

const host = '';

/**
 * Fetch books
 */
export const fetchSurveys = () => {
  return axios.get(`${host}/api/Surveys`);
}

export const addSurvey = (data) => {
  return axios.post(`${host}/api/Surveys`, data);
}
