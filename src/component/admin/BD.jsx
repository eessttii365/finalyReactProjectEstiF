import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import EditBD from './EditBD';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function BD(props) {
  const { isAdmin } = props;
  const [open, setOpen] = useState(false);
  const [bdDetails, setBdDetails] = useState('')

  useEffect(() => {
    axios.get("http://localhost:8787/businessData")
      .then(res => {
        if (res.status === 200) {
          setBdDetails(res.data)
          console.log(res.data)
          console.log("הנתונים עודכנו בהצלחה")
        }
      })
      .catch(err => {

      })

  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div>

        {
          isAdmin ?
            JSON.stringify(bdDetails) == '{}' ?
              <div style={{ margin: '50px', fontSize: '24px' }}>נא עדכן את פרטי העסק</div>
              :
              <div style={{ textAlign: 'center' }}>
                <h1>{bdDetails.name}</h1>
                <h2>{bdDetails.address}</h2>
                <h2>{bdDetails.phone}</h2>
              </div>
            :
            JSON.stringify(bdDetails) == '{}' ?
              <div style={{ margin: '50px', fontSize: '24px' }}>האתר בתחזוקה - פרטי העסק לא מעודכנים :(</div>
              :
              <div style={{ textAlign: 'center' }}>
                <h1>{bdDetails.name}</h1>
                <h2>{bdDetails.address}</h2>
                <h2>{bdDetails.phone}</h2>
              </div>
        }
        {
          isAdmin ?
            <Fab color="primary" aria-label="edit" onClick={handleClickOpen}>
              <EditIcon />
            </Fab>
            :
            <></>
        }
      </div>

      <EditBD openDialog={open} setOpenDialog={setOpen} setBdDetails={setBdDetails} />

    </>
  )
}

export default BD