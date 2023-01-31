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
       
    
       <div id='container' style={{padding:'3rem', marginLeft:'20px'}}>             
       <img src="https://yesofcorsa.com/wp-content/uploads/2017/10/Sylvester-Stallone-Wallpaper-For-IPhone-Download.jpg" alt="Nature" class="responsive" width='310px' style={{boxShadow:'5px 5px 7px 7px #fff'}}/> 
         </div>
      

        <div style={{margin:'30px', width:'600px', marginLeft:'3rem', color:'#FFF', fontSize:'20px'}}>
          <p className='title' style={{color:'#fff'}}><h1 style={{textAlign:'center',color:'#FFFF00'}}>DESENVOLVEDOR PYTHON</h1></p>
          <p>
          Desenvolvedor Python graduado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista (UNIP). Possuo habilidades com os Frameworks Flask, FastAPI, Djando e Django Rest Framework. 

          Atualmente adquirindo conhecimento em Front-End usando typescript e React. </p>
                 
       <p>
         Ao longo de minha trajetória adquiri algumas competências como: <span>Boa comunicação, assertividade, saber lidar sobre pressão e também a persuasão</span>, além da vontade de aprender novas tecnologias. 

       </p>

       <div className="modal-footer">

       </div>
        
        <button type="button" class="btn btn-outline-warning" onClick={() => setCount(count + 1)} style={{width:'200px',height:'50px', marginLeft:'190px',marginTop:'2rem',borderRadius:'40px', float:'left'}}>Projetos</button>
       <button type="button" class="btn btn-outline-warning" onClick={() => setCount(count + 1)} style={{width:'200px',height:'50px', marginLeft:'190px',marginTop:'2rem',borderRadius:'40px', float:'left'}}>Contato</button>

       
        </div>

            
  </div> 
   
      
      
      
      </div>   
      

     
       
       
    
        
  )
}

export default Masterpage