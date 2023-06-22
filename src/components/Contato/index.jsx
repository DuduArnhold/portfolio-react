import '../Contato/style.css';
import { BsFillTelephoneFill,  } from 'react-icons/bs';
import { SiGmail,  } from 'react-icons/si';
import {AiOutlineGithub, AiOutlineLinkedin, } from 'react-icons/ai';


export default function Contato(){
    return(
            <section className="container-contato">
                <h4>contato</h4>
                <div className="contato-items">
                    <a href="https://github.com/DuduArnhold">
                        <AiOutlineGithub size={50}/>
                    </a>
                    <a href="https://www.linkedin.com/in/duduarnhold/">
                        <AiOutlineLinkedin size={50}/>
                    </a>
                    <div className="items-txt">
                        <SiGmail size={50}/>
                        <p>duduarnhold2@gmail.com</p>
        
                        <BsFillTelephoneFill size={50}/>
                        <p>55 54 99983-9523</p>
                    </div>
                </div>
            </section>
    )
}