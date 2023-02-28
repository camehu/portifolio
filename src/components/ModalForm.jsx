import React from 'react'
import FormContact from '../components/FormContact'

const ModalForm = () => {
  return (
    <div>
 <div className='col'>   
<button type="button" class="btn btn-outline-warning btn-lg " data-bs-toggle="modal" data-bs-target="#myModal">
  Contato
</button></div>


<div class="modal" id="myModal">
  <div class="modal-dialog modal-md">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Contato</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

    
      <div class="modal-body">
        <FormContact/>
      </div> 
    </div>
  </div>
</div>





    </div>
  )
}

export default ModalForm