import './style.css'



export default function Header(){
    return (
        <>
        <header>
        <div>
            <a href="#"><img src="./public/images/Logo.png" alt="Logo site" /></a>
        </div>


        <div className='nav-list'>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Projetos</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>
        </header>

        </>
    )
}