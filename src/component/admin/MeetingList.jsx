import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { observer } from 'mobx-react';
import MeetingStore from '../../stores/meetingStore';


const MeetingList = (observer(() => {

  const checkDate = (date) => {
    const currentDate = new Date();
    const sevenDaysFromNow = new Date(new Date().setDate(currentDate.getDate() + 7));
    return date >= currentDate && date <= sevenDaysFromNow;
  }

  return (
    <>
      {
        MeetingStore.meetingList.map(i =>
          <Card variant="soft" style={{
            margin: '30px',
            textAlign: 'center',
            alignItems: 'center',
            width: 343,
            display: 'inline-block',
            border: `2px solid  ${new Date(i.dateTime).getDate() == new Date().getDate() ? 'red' :
              checkDate(new Date(i.dateTime)) ? 'yellow' :
                'green'}`
          }}>
            <CardContent>
              <Typography>{i.serviceType}</Typography>
              <Typography>{i.dateTime}</Typography>
              <Typography>{i.clientName}</Typography>
              <Typography>{i.clientPhone}</Typography>
              <Typography>{i.clientEmail}</Typography>
            </CardContent>
          </Card>
        )
      }
    </>
  )
}))

export default MeetingList