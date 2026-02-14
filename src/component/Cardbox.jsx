import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Cardbox = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="demo4-postimg3-370x300.png"
        title="green iguana"
      />
      <CardContent>
        <p><span>Medical</span> <span>March 31, 2022</span></p>
        <Typography gutterBottom variant="h6" component="div">
           Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <div className='whopost'><img className='blogwrit' src='portrait-doctor-2-2.png' /> Rebecca Lee</div>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default Cardbox