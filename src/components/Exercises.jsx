import React, { useEffect, useState, useContext } from 'react'
import { homeContext } from '../pages/Home'
import { Pagination, Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'

const Exercises = () => {
  const { exercises, setExercises, bodyPart, isLoading, setIsLoading } = useContext(homeContext)
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1200, behavior: "smooth" })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=1000',
        exerciseOptions)
      } else {
        exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`,
        exerciseOptions)
      }
      setExercises(exercisesData)
      setIsLoading(false);
    }
    fetchExercisesData()
  }, [bodyPart])
  

  return (
    <Box id="exercises"
      sx={{mt: {lg: "110px"}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: {lg: "110px", xs: "50px"}}}
      flexWrap="wrap" justifyContent="center">
        {!isLoading ? currentExercises.map((exercise, i) => (
          <ExerciseCard 
            key={i}
            exercise={exercise}
          />
        )) : <Loader />}
      </Stack>
      <Stack mt="100px" alignItems="center">
          <Pagination 
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
      </Stack>
    </Box>
  )
}

export default Exercises