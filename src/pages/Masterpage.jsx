//import React, {useState} from 'react';
//import styles from './Masterpage.module.css';
import './Masterpage.module.css'
import humberto from '../components/img/Carlos-humberto.jpg';


const Masterpage = () => {
 // const [count, setCount] = useState(0);

  return (    
   
   <div className="container">
  <div className="row ">
    <div className="col text-center">
      <img src={humberto} alt="" srcset="" width='350px'/>
    </div>

    <div className="col mt-4">
      <h1 className='p-2'>Desenvolvedor Python</h1>
      <p>
          Desenvolvedor Python graduado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista (UNIP).
          Possuo habilidades com os Frameworks Flask, FastAPI, Djando e 
          Django Rest Framework. </p>
      <p>Atualmente adquirindo conhecimento em Front-End usando typescript, VUE.js e React.</p>
      <p>Ao longo de minha trajetória adquiri algumas competências como: Boa comunicação, assertividade,
         saber lidar sobre pressão e também a persuasão, além da vontade de aprender novas tecnologias. </p>

      <div className="col text-center mt-4">
        <button type='button' className="btn btn-outline-warning rounded-pill" > Projetos</button>
        <button type='button' className="btn btn-outline-warning rounded-pill"> Contato</button>
    </div>
    </div>
  </div>
  </div>
        
  )
}

export default Masterpage