import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import logo from "../assets/images/Logo-1.png"

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" >
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={logo} alt="logo" width="200px" height="40px" />
        <Typography sx={{ fontSize: { lg: '28px', xs: '20px' }}} pb="40px"
        mt="20px">
          {`This is a test from Hadi Ghari <3`}
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer