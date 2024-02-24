
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { observer } from 'mobx-react';
import ServiceStore from '../../stores/serviceStore';

const Service = (observer((props) => {

  const { openServiceModal, setCloseNodal } = props

  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [duration, setDuration] = useState('')

  const handleClose = () => {
    setCloseNodal(false);
  };

  return (
    <>
      <Dialog
        open={openServiceModal}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            ServiceStore.addService({ "name": subject, "description": description, "price": price, "duration": duration });
            handleClose();
          },
        }}
      >
        <DialogTitle>הוספת שירות</DialogTitle>
        <DialogContent>
          <TextField onChange={e => setSubject(e.target.value)}//האירוע .האלמנט שעליו קרה האירוע.והערך
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="מקצוע"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={e => setDescription(e.target.value)}
            autoFocus
            required
            margin="dense"
            id="Description"
            name="Description"
            label="תיאור המקצוע"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField onChange={e => setPrice(e.target.value)}
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            label="מחיר"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField onChange={e => setDuration(e.target.value)}
            autoFocus
            required
            margin="dense"
            id="duration"
            name="duration"
            label="משך זמן השיעור"
            type="text"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button type="submit">הוספה</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}))

export default Service;