import '../Primeflix/style.css';
import {FaCss3Alt, FaHtml5,  } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';

export default function PrimeFlix(){
    return(
        <>
            
            <section className='container'>
            
            <div className='project-container'>
                <div>
                    <img className='img-projeto' src="./public/images/primeflix.png" alt="Imagem do projeto tarefas +" />
                </div>
                

                <div className='txt-icons'>
                <div className='txt-projeto'>
                    <p>
                        PrimeFlix é um projeto realizado consumindo a API do TMDB <br/>
                        e desenvolvido em React, além de utilizarmos também o localStorage<br/>
                        para fazermos um sistema de favoritos para o site<br/>
                        e também acessarmos trailer sobre os filmes.<br/>
                        
                    </p>
                </div>

                <section className='icons-projeto'>
                    <div><FaCss3Alt size='3rem'/></div>
                    <div><FaHtml5 size='3rem'/></div>
                    <div><RiReactjsFill size='3rem'/></div>
                    
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