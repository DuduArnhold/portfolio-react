import {AiOutlineGithub, AiOutlineLinkedin, } from 'react-icons/ai';
import '../Home/style.css';

export default function Home(){
    return(
        <section className='container-home'>
            <div className='name_icons'>
                <h1 className='title'>José Eduardo Arnhold</h1>
                <a href="#">
                    <AiOutlineGithub
                         size='5rem'
                    />
                </a>
                <a href="#">
                    <AiOutlineLinkedin
                        size='5rem'
                    />
                </a>
            </div>
                <img  className='img-home' src='./public/images/dev-prod.svg' alt="Undraw illustration de um dev" />

        </section>
    )
}