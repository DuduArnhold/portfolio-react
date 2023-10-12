import './style.css'



export default function Header(){
    
    function showMenu(){
        const nav = document.getElementById("nav");

        nav.classList.toggle('active')

        
    }

    return (
        <>
        <header id='header'>
        <div>
            <a href="#home" id='logo'>
                <img src="./images/Logo.png" alt="Logo site" />
            </a>
        </div>


        <div className='nav-list'>
            <nav id='nav'>
                <button id='btn-mobile' onClick={showMenu}>
                    Menu
                    <span id='hamburguer'></span>
                </button>
                <ul id='menu'>
                    <li className="nav-item">
                        <a href="#home">Home</a>
                    </li >
                    <li className="nav-item">
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
                
            </nav>
        </div>
       


    </header>

        </>
    )
}