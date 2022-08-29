import Rotas from './Router';
import MyContext from './MyContext/MyContext';
import './App.css';

function App() {

  const contextValue = {
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
