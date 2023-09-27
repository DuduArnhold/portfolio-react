import '../Contato/style.css';
import { BsFillTelephoneFill,  } from 'react-icons/bs';
import { SiGmail,  } from 'react-icons/si';
import {AiOutlineGithub, AiOutlineLinkedin, } from 'react-icons/ai';


export default function Contato(){
    return(
            <section className="container-contato" id='contato'>
                <h4>contato</h4>
                <div className="contato-items">
                    <a href="https://github.com/DuduArnhold"  target="_blank" rel="noreferrer">
                        <AiOutlineGithub size='4rem'/>
                    </a>
                    <a href="https://www.linkedin.com/in/duduarnhold/" target="_blank" rel="noreferrer">
                        <AiOutlineLinkedin size='4rem'/>
                    </a>
                    <div className="items-txt">
                        <SiGmail size='3rem'/>
                        <p>duduarnhold2@gmail.com</p>
        
                        <BsFillTelephoneFill size='3rem'/>
                        <p>55 54 99642-9071</p>
                    </div>
                </div>
            </section>
    )
}