import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" }}} p="20px">
      <Typography 
        sx={{ fontSize: { lg: '44px', xs: '25px' }}}
        my={5}
      >
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
      {targetMuscleExercises.length ? 
      <HorizontalScrollbar 
        data={targetMuscleExercises} 
      /> : <Loader />}       
      </Stack>

      <Typography 
        sx={{ fontSize: { lg: '44px', xs: '25px' }}}
        my={5}
      >
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
      {equipmentExercises.length ? 
      <HorizontalScrollbar 
        data={equipmentExercises}
      /> : <Loader />}       
      </Stack>
    </Box>
  )
}

export default SimilarExercises