import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';
import Service from './Service';
import { observer } from 'mobx-react';
import ServiceStore from '../../stores/serviceStore';

const ServicesList = (observer((props) => {
  const { showAddService } = props;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {
        ServiceStore.serviceList.map(i => {
          return (
            <div style={{ display: 'inline-block' }}>
              <Card
                data-resizable
                sx={{
                  margin: '30px',
                  textAlign: 'center',
                  alignItems: 'center',
                  width: 343,
                  // to make the demo resizable
                  overflow: 'auto',
                  resize: 'horizontal',
                  '--icon-size': '100px',
                }}
              >
                <CardOverflow variant="solid" color="primary">
                  <AspectRatio
                    variant="outlined"
                    color="primary"
                    ratio="1"
                    sx={{
                      m: 'auto',
                      transform: 'translateY(50%)',
                      borderRadius: '50%',
                      width: 'var(--icon-size)',
                      boxShadow: 'sm',
                      bgcolor: 'background.surface',
                      position: 'relative',
                    }}
                  >
                    <div>

                      <MenuBookIcon color="primary" sx={{ fontSize: '4rem' }} />
                    </div>
                  </AspectRatio>
                </CardOverflow>
                <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                  {i.name}
                </Typography>
                <CardContent sx={{ maxWidth: '40ch' }}>
                  {i.description}
                </CardContent>
                <small >
                  {i.price} ש"ח
                </small>
                <Typography level="body-xs">
                  {i.duration} דקות
                </Typography>

                <CardActions
                  orientation="vertical"
                  buttonFlex={1}
                  sx={{
                    '--Button-radius': '40px',
                    width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                  }}
                >
                  <Button variant="plain" color="neutral">
                    לקביעת שיעור
                  </Button>
                </CardActions>
              </Card>
            </div>
          )
        }
        )}

      <div>
        {
          showAddService ?
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
              <AddIcon />
            </Fab>
            :
            <></>
        }
      </div>
      <Service openServiceModal={open} setCloseNodal={setOpen} />
    </>
  )
}))

export default ServicesList