import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ]
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: 
    "center" }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
      <Stack sx={{ gap: { lg: "35px", xs: "20px" }}}>
        <Typography sx={{ fontSize: { lg: "64px", xs: "30px" }}}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: "24px", xs: "18px" }}}>
          {`Exercises keep you strong. ${name} 
          is one of the exercises to target your 
          ${target}.`}
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ backgroundColor: "#fff2db", borderRadius: "50%",
            width: { lg: "100px", xs: "80px" }, height: { lg: "100px", xs: "80px" }}}>
              <img src={item.icon} alt={bodyPart} style={{ width: "50px", height: "50px" }}/>
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: "30px", xs: "20px" }}}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail