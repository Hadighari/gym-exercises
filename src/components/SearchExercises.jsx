import React, { useState, useEffect, useContext } from 'react';
import { homeContext } from '../pages/Home';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])
  const { setExercises, isLoading, setIsLoading }  = useContext(homeContext)

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exerciseOptions)
      setBodyParts(["all", ...bodyPartsData])

    }
    
    fetchExercisesData()
  }, [])
  
  
  const handleSearch = async () => {
    if (search) {
      window.scrollTo({ top: 1800 , left: 100, behavior: "smooth" })
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=1000',
        exerciseOptions
      )
      const serachedExercise = exercisesData.filter(
         (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
      )  
      setSearch("");
      setExercises(serachedExercise)
    }
  }
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: {lg: "44px", xs: "30px"}}}
        mb="50px" textAlign="center">
        Awesome Exercises You Should Know <br/>
      </Typography>
      <Box position="relative" mb="72px" display='flex' flexDirection='row-reverse' alignItems='center'>
        <TextField 
          sx={{
            input: { 
              fontWeight: "700",
              border: "none", borderRadius: "4px"},
              width: {lg: "800px", xs: "350px"},
              backgroundColor: "#fff",
              borderRadius: "full",
          }}
          height="72px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Serach Exercises'
          type='text'
        />
        <Button className="search-btn" 
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: {lg: "175px" , xs: "80px"},
            fontSize: {lg: "20px", xs: "14px"},
            height: "56px",
            position: "absolute",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box> 
      <Box sx={{ position: "relative", width: "100%", p:"20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          isBodyParts  
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises