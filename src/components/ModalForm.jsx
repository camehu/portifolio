import * as React from 'react';
import Button from '@mui/material/Button';
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
    <div style={{width:'90%'}}>
      <Button variant={'contained'} color={'warning'} size={'large'}   onClick={handleClickOpen}>
          Contato
      </Button>
      <Dialog open={open} onClose={handleClose} >
       <DialogContent style={{width: '350px'}}>
          <FormContact/>
        </DialogContent>
        </Dialog>
    </div>
  );
}