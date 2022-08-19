import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardMedia} from '@mui/material';

function WeatherCard({item, mykey}) {
  
  return (
    <Card sx={{ maxWidth: 250 }} key={mykey} className={mykey === 0 ? "Today" : ""}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={item.icon}
                  alt="weather"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.day}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {convertToFixed(item.temp)}<sup> o</sup>C
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
  )
}
function convertToFixed(val) {
    return parseInt(val).toFixed(1)
  }

export default WeatherCard