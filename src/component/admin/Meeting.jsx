import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import meetingStore from '../../stores/meetingStore';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import ServiceStore from '../../stores/serviceStore';


const meeting = (props) => {

  const { openNewMeeting, setOpenNewMeeting } = props;//שולפת מהפרופס את המשנה
  const [serviceType, setServiceType] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientEmail, setClientEmail] = useState('')

  const handleClose = () => {
    setOpenNewMeeting(false);
  };

  const checkDate = (date) => {
    const currentDay = new Date();
    if (new Date(date) >= currentDay) {
      setDateTime(date)
    }
    else {
      alert('התאריך לא חוקי')
      setDateTime('')
    }
  }

  return (
    <>
      <Dialog
        style={{}}
        fullWidth='40vw'
        open={openNewMeeting}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            meetingStore.addMeeting({ "serviceType": serviceType, "dateTime": dateTime, "clientName": clientName, "clientPhone": clientPhone, "clientEmail": clientEmail })
            handleClose();
          },
        }}
      >
        <DialogTitle>קביעת שיעור</DialogTitle>

        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            מקצוע
          </InputLabel>
          <NativeSelect

            onChange={(e) => { setServiceType(e.target.value) }}
            defaultValue=''
            inputProps={{
              name: 'מקצוע',
              id: 'uncontrolled-native',
            }}
          >
            {ServiceStore.serviceList.map(i =>
              <option value={i.name}>{i.name}</option>
            )}

          </NativeSelect>
        </FormControl>

        <TextField
          onChange={(e) => { checkDate(e.target.value) }}     //אלמנט, אירוע, ערך
          autoFocus
          required
          margin="dense"
          id="dateTime"
          name="dateTime"
          value={dateTime}
          label="  תאריך ושעה"
          type="datetime-local"
          fullWidth
          variant="standard"
        />
        <TextField onChange={(e) => { setClientName(e.target.value) }}
          autoFocus
          required
          margin="dense"
          id="clientName"
          name="clientName"
          label="שם מלא"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField onChange={(e) => { setClientPhone(e.target.value) }}
          autoFocus
          required
          margin="dense"
          id="clientPhone"
          name="clientPhone"
          label="נייד"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField onChange={(e) => { setClientEmail(e.target.value) }}
          autoFocus
          required
          margin="dense"
          id="clientEmail"
          name="clientEmail"
          label="אימייל"
          type="email"
          fullWidth
          variant="standard"
        />
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button type="submit">הוספה</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default meeting;