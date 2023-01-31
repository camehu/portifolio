/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import '../pages/masterPage.module.css'



const Masterpage = () => {
  const [count, setCount] = useState(0);

  return (    
   
    <div style={{padding:'3rem'}}>   

    <div class="d-flex justify-content-center align-content-center flex-wrap">
       
      
       <div style={{padding:'3rem',marginTop:'3rem', marginLeft:'20px'}}>             
         <img src="/public/img/carlosHumberto.png" class="rounded-circle" alt="Foto Carlos Humberto" width="260" height="261" style={{boxShadow: '6px 10px 80px 30px yellow'}}/> 
         </div>
      

        <div style={{margin:'30px', width:'600px', marginLeft:'3rem', color:'#FFF', fontSize:'20px'}}>
          <p style={{color:'#fff'}}><h1 style={{textAlign:'center',color:'#FFFF00'}}>DESENVOLVEDOR PYTHON</h1></p>
          <p>
          Desenvolvedor Python graduado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista (UNIP). Possuo habilidades com os Frameworks Flask, FastAPI, Djando e Django Rest Framework. 

          Atualmente adquirindo conhecimento em Front-End usando typescript e React. </p>
                 
       <p>
         Ao longo de minha trajetória adquiri algumas competências como: <span>Boa comunicação, assertividade, saber lidar sobre pressão e também a persuasão</span>, além da vontade de aprender novas tecnologias. 

       </p>

       <button type="button" class="btn btn-outline-warning" onClick={() => setCount(count + 1)} style={{width:'200px',height:'50px', marginLeft:'198px',marginTop:'2rem',borderRadius:'40px'}}>Projetos</button>
       
        </div>

            
  </div> 
   
      
      
      
      </div>   
      

     
       
       
    
        
  )
}

export default Masterpage