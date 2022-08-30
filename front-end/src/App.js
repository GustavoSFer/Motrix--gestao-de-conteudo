import { useEffect, useState } from 'react';
import Rotas from './Router';
import MyContext from './MyContext';
import { RequestApi } from './Services/RequestApi';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pesquisa, setPesquisa] = useState('');


  const api = async () => {
    setLoading(true);
    setBlogs(await RequestApi('/blog'));
    setLoading(false);
  };

  const pesquisarTitulo = (txt) => {
    if (txt !== ''){
      const result = [...blogs].filter((item) => {
        const toLowerTitulo = item.titulo.toLowerCase();
        const toLowerTxt = txt.toLowerCase();
        return toLowerTitulo === toLowerTxt;
      });
      setBlogs(result);
      setPesquisa('');
    }
  };

  const limparPesquisa = () => {
    api();
  }

  useEffect(() => {
    api()
  },[]);

  const contextValue = {
    blogs,
    setBlogs,
    loading, setLoading,
    pesquisa, setPesquisa,
    pesquisarTitulo, limparPesquisa,
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
