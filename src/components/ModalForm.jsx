import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormContact from '../components/FormContact'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <button id='btnContato' type="button" class="btn btn-outline-warning" style={{width:'220px'}} onClick={handleClickOpen}>Contato</button>           
      <Dialog open={open} onClose={handleClose} >
       <DialogContent>
          <FormContact/>
        </DialogContent>
        </Dialog>
    </div>
  );
}