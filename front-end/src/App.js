import { useEffect, useState } from 'react';
import Rotas from './Router';
import MyContext from './MyContext/MyContext';
import { RequestApi } from './Services/RequestApi';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const api = async (query = 'computador') => {
    setLoading(true);
    const teste = await RequestApi('/blog')
    setLoading(false);
  };

  useEffect(() => {
    api()
  },[]);

  const contextValue = {
    data,
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
