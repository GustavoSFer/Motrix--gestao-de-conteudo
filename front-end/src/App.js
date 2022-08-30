import { useEffect, useState } from 'react';
import Rotas from './Router';
import MyContext from './MyContext';
import { RequestApi } from './Services/RequestApi';
import formatData from './Utils';
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

  const filtrarOpcao = (opcao) => {
    if (opcao === 'recentes') {
      const result = [...blogs].sort((a, b) => {
        const bData = formatData(b.dataCriacao);
        const aData = formatData(a.dataCriacao);
        if (aData < bData) {
          return 1;
        }
        if (aData > bData) {
          return -1;
        }
        return 0
      });
      setBlogs(result);
    } else {
      const result = [...blogs].sort((a, b) => {
        const bData = formatData(b.dataCriacao);
        const aData = formatData(a.dataCriacao);
        if (aData > bData) {
          return 1;
        }
        if (aData < bData) {
          return -1;
        }
        return 0
      });
      setBlogs(result);
    }
  }

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
    filtrarOpcao,
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
