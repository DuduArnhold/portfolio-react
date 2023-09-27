import './style.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';


export default function Header(){

    return (
        <>
        <header>
        <div>
            <a href="#"><img src="./images/Logo.png" alt="Logo site" /></a>
        </div>


        <div className='nav-list'>
            <nav>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
                
            </nav>
        </div>
        <div className='nav-list-mobile'>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
        </div>
        <div className='icon-mobile-menu'>
                    <AiOutlineMenu
                        size="2.5rem"
                    />
        </div>
        <div className='icon-mobile-menu'>
                    <AiOutlineClose
                        size="2.5rem"
                    />
        </div>

        </header>

        </>
    )
}