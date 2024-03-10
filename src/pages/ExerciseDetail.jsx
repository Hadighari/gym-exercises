import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { homeContext } from './Home';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [relatedExerciseVideos, setRelatedExerciseVideos] = useState([])
  const [targetMuscleExercises, setargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
      exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
      youtubeOptions);
      setRelatedExerciseVideos(exerciseVideosData);
      // setIsLoading(false)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
      exerciseOptions);
      setargetMuscleExercises(targetMuscleExercisesData);


      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
      exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    }
    fetchExercisesData();
  }, [id])
  
  return (
    <Box>
      <Detail 
        exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos 
        relatedExerciseVideos={relatedExerciseVideos} 
        name={exerciseDetail.name}
      />
      <SimilarExercises 
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

export default ExerciseDetail