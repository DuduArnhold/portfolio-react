import Header from './components/Header/index.jsx';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>

    <main>
      <Home/>

      <Sobre/>

      <Projetos/>
    </main>
      
     

    </>
  )
}

export default App;
