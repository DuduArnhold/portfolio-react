import '../Tarefas+/style.css';
import {FaCss3Alt, FaHtml5,  } from 'react-icons/fa';

import { SiNextdotjs, SiTypescript} from 'react-icons/si';

export default function TarefasPlus(){
    return(
        <>
            <div className='title'>
                <h3>Projetos</h3>
            </div>
            <section className='container' id='projetos'>
            
            <div className='project-container'>
                <div>
                    <img className='img-projeto' src="./public/images/tarefas+.png" alt="Imagem do projeto tarefas +" />
                </div>
                

                <div className='txt-icons'>
                <div className='txt-projeto'>
                    <p>
                        Tarefas Plus é um projeto de uma To Do list totalmente<br/> 
                        interativa, utilizando o nextJS e o NextAuth para fazer login com a sua conta<br/> 
                        do google, além de utilizarmos o firebase como banco de dados do projeto.<br/>
                        
                    </p>
                </div>

                <section className='icons-projeto'>
                    <div><FaCss3Alt size='3rem'/></div>
                    <div><FaHtml5 size='3rem'/></div>
                    <div><SiTypescript size='3rem'/></div>
                    <div><SiNextdotjs size='3rem'/></div>
                </section>
                </div>


                <div className='buttons-projeto'>
                    <a className='link' href="#">
                        <button className='button'>GitHub</button>
                    </a>
                    <a className='link' href="#">
                        <button className='button'>Ir para o projeto</button>
                    </a>
                </div>

            </div>

            </section>

        </>
    )
}