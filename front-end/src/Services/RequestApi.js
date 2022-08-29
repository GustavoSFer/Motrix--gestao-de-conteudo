import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const RequestApi = async (endpoint) => {
  try {
    const { data } = await axios.get((baseURL) + endpoint);
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export default RequestApi;
