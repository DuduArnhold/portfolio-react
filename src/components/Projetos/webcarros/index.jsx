import '../Tarefas+/style.css';
import {FaCss3Alt, FaHtml5,  } from 'react-icons/fa';

import { SiReact, SiTypescript} from 'react-icons/si';

export default function WebCarros(){
    return(
        <>
            
            <section className='container' id='projetos'>
            
            <div className='project-container'>
                <div>
                    <img className='img-projeto' src="./images/webcarros.png" alt="Imagem do projeto tarefas +" />
                </div>
                

                <div className='txt-icons'>
                <div className='txt-projeto'>
                    <p>
                        WebCarros é um projeto onde o usuário pode anunciar<br/> 
                        ou buscar carros novos/seminovos de maneira prática e rápida desenvolvido com react + 
                        typeScript, utilizando o firebase como banco de dados e tailwindCSS.<br/>
                        
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
                    <a className='link' href="https://github.com/DuduArnhold/WebCarros">
                        <button className='button'>GitHub</button>
                    </a>
                    <a className='link' href="https://web-carros-eight.vercel.app/">
                        <button className='button'>Ir para o projeto</button>
                    </a>
                </div>

            </div>

            </section>

        </>
    )
}