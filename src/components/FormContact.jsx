import React from 'react'


const FormContact = () => {
  return (
    <div style={{padding:'3px'}} >
    <form >
        <div style={{}} >
       
        </div>
            <div class="mb-3 mt-3">
                <label for="nomecompleto" class="form-label">Nome Completo:</label>
                <input type="text" class="form-control" id="nomecompleto" name="nomecompleto"/>
            </div>
            <div class="mb-3 mt-3">
                <label for="telefone" class="form-label">Telefone:</label>
                <input type="text" class="form-control" id="telefone" name="telefone"/>
            </div>
            <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" name="email"/>
            </div>
            <div class="mb-2">
            <label for="comment">Mensagem:</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
            </div>
            <div><button type="button" class="btn btn-outline-primary">Enviar</button></div>
            
            </form>

         

            
      
    </div>
  )
}

export default FormContact
