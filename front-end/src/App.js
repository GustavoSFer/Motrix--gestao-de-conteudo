import { useEffect, useState } from 'react';
import Rotas from './Router';
import MyContext from './MyContext';
import { RequestApi } from './Services/RequestApi';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const api = async () => {
    setLoading(true);
    setBlogs(await RequestApi('/blog'));
    setLoading(false);
  };

  useEffect(() => {
    api()
  },[]);

  const contextValue = {
    blogs,
    loading,
  };


  return (
    <MyContext.Provider value={contextValue}>
      <div className="App">
        <Rotas />
      </div>
    </MyContext.Provider>
  );
}

export default App;
