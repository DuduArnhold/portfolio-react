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
                        <AiOutlineGithub size='5rem'/>
                    </a>
                    <a href="https://www.linkedin.com/in/duduarnhold/" target="_blank" rel="noreferrer">
                        <AiOutlineLinkedin size='5rem'/>
                    </a>
                    <div className="items-txt">
                        <SiGmail size='5rem'/>
                        <p>duduarnhold2@gmail.com</p>
        
                        <BsFillTelephoneFill size='5rem'/>
                        <p>55 54 99983-9523</p>
                    </div>
                </div>
            </section>
    )
}