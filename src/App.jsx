import Header from './components/Header/index.jsx';
import {AiOutlineGithub, AiOutlineLinkedin, } from 'react-icons/ai';

import '../src/app.css'

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>

    <main>
      <section className='container-home'>
      <div className='name_icons'>
        <h1 className='title'>José Eduardo Arnhold</h1>
        <a href="#">
          <AiOutlineGithub
            size='3rem'
          />
        </a>
        <a href="#">
        <AiOutlineLinkedin
          size='3rem'
        />
        </a>
        </div>
        <img  className='img-home' src='./public/images/dev-prod.svg' alt="Undraw illustration de um dev" />

      </section>
    </main>
      
     

    </>
  )
}

export default App;
