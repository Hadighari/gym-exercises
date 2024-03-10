import React, { useState, createContext } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

export const homeContext = createContext()


const Home= () => {
  const [bodyPart, setBodyPart] = useState("all")
  const [exercises, setExercises] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  return (
    <Box>
      <HeroBanner />
      <homeContext.Provider value={{ exercises, setExercises, bodyPart, setBodyPart, isLoading, setIsLoading }}>
        <SearchExercises />
        <Exercises />
      </homeContext.Provider>
    </Box>
  )
}

export default Home