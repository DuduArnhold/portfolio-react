import {AiOutlineGithub, AiOutlineLinkedin, } from 'react-icons/ai';
import '../Home/style.css';

export default function Home(){
    return(
        <section className='container-home' id='home'>
            <div className='name_icons'>
                <h1 className='title'>José Eduardo Arnhold</h1>
                <a href="https://github.com/DuduArnhold" target="_blank" rel="noreferrer">
                    <AiOutlineGithub
                         size='5rem'
                    />
                </a>
                <a href="https://www.linkedin.com/in/duduarnhold/" target="_blank" rel="noreferrer">
                    <AiOutlineLinkedin
                        size='5rem'
                    />
                </a>
            </div>
                <img  className='img-home' src='./images/dev-prod.svg' alt="Undraw illustration de um dev" />

        </section>
    )
}