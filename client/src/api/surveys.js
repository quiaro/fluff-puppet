import axios from 'axios';

const host = 'https://rest-api-boilerplate-sinvtjgbzy.now.sh';

/**
 * Fetch books
 */
export const fetchSurveys = () => {
  return axios.get(`${host}/api/Surveys`);
}

export const addSurvey = (data) => {
  return axios.post(`${host}/api/Surveys`, data);
}
