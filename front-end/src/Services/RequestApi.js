import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const RequestApi = async (endpoint) => {
  try {
    const { data } = await axios.get((baseURL) + endpoint);
    return data;
  } catch (error) {
    return console.error('Algo deu errado! ', error);
  }
};

const RequestOneBlog = async (endpoint) => {
  try {
    const { data } = await axios.get((baseURL) + endpoint);
    return data;
  } catch (error) {
    return console.error('Algo deu errado! ', error);
  }
};

const RequestUpdateBlog = async (endpoint, body) => {
  try {
    const { data } = await axios.post((baseURL) + endpoint, body);
    return data;
  } catch (error) {
    return console.error('Algo deu errado! ', error);
  }
};

const RequestDesativar = async (endpoint) => {
  try {
    const { data } = await axios.patch((baseURL) + endpoint);
    return data;
  } catch (error) {
    return console.error('Algo deu errado! ', error);
  }
};

const RequestRemover = async (endpoint) => {
  try {
    const { data } = await axios.delete((baseURL) + endpoint);
    return data;
  } catch (error) {
    return console.error('Algo deu errado! ', error);
  }
};

export {
  RequestApi,
  RequestOneBlog,
  RequestUpdateBlog,
  RequestDesativar,
  RequestRemover,
};
