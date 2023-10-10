import '../dev-link/style.css';
import {FaCss3Alt, FaHtml5,  } from 'react-icons/fa';

import { SiReact, SiTypescript, } from 'react-icons/si';

export default function DevLink(){
    return(
        <>
            <section className='container' id='projetos'>
            
            <div className='project-container'>
                <div>
                    <img className='img-projeto' src="./images/DevLink.png" alt="Imagem do projeto devlink" />
                </div>
                

                <div className='txt-icons'>
                <div className='txt-projeto'>
                    <p>
                        DevLink é um projeto de agregador de links, feito em react,<br/>
                        utilizando o TypeScript e para estilização o Tailwind CSS, <br />
                        e como banco de dados e autenticação foi utilizado o firebase e firestore,<br/>
                        para navegação de páginas foi utilizado React Router DOM.
                    </p>
                </div>

                <section className='icons-projeto'>
                    <div><FaCss3Alt size='3rem'/></div>
                    <div><FaHtml5 size='3rem'/></div>
                    <div><SiTypescript size='3rem'/></div>
                    <div><SiReact size='3rem'/></div>
    
                </section>
                </div>


                <div className='buttons-projeto'>
                    <a className='link' href="https://github.com/DuduArnhold/linktree">
                        <button className='button'>GitHub</button>
                    </a>
                    <a className='link' href="https://dev-tree-flax.vercel.app/">
                        <button className='button'>Ir para o projeto</button>
                    </a>
                </div>

            </div>

            </section>

        </>
    )
}