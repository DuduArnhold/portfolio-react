import Header from './components/Header/index.jsx';
import Home from './components/Home';
import Sobre from './components/Sobre';
import TarefasPlus from './components/Projetos/Tarefas+';
import PrimeFlix from './components/Projetos/Primeflix';
import Footer from './components/Footer';
import Contato from './components/Contato';
import DevLink from './components/Projetos/dev-link/index.jsx';
import WebCarros from './components/Projetos/webcarros/index.jsx';

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>

    <main>
      <Home/>

      <Sobre/>

      <TarefasPlus/>

      <PrimeFlix/>

      <DevLink/>
      
      <WebCarros/>

      <Contato/>
    </main>
      
      <footer>
        <Footer/>
      </footer>
     

    </>
  )
}

export default App;
