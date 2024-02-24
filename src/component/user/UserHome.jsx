import BD from '../admin/BD';
import ServicesList from './../admin/ServicesList';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Meeting from '../admin/Meeting';

function UserHome() {

  const [openNewMeeting, setOpenNewMeeting] = useState(false)

  return (
    <>
      <BD isAdmin={false} />

      <div>
        <Button variant="outlined" size="medium" onClick={() => { setOpenNewMeeting(true) }}>
          לקביעת שיעור
        </Button>
      </div>
      < ServicesList showAddService={false} />
      <Meeting openNewMeeting={openNewMeeting} setOpenNewMeeting={setOpenNewMeeting} />
    </>
  )
}

export default UserHome