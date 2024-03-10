import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ relatedExerciseVideos, name }) => {
  return (
    <Box sx={{ mt: {lg: "200px", xs: "20px"}}} p="20px">
      <Typography sx={{ fontSize: { lg: "44px", xs: "25px" }}} mb="70px">
        Watch <span style={{ color: '#ff2625', textTransform: "capitalize" }}>{name}</span> exercises videos
      </Typography>
      <Stack justifyContent="start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" }
        }}>
          {relatedExerciseVideos.contents?.slice(0, 3).map((item, i) => (
                <a
                key={i}
                className='exercise-video'
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target='_blank'
                rel='noreferrer'
              >
                <img style={{  border: "1px solid #555" }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>
                  <Typography style={{ color: "#fff", padding: "5px", backgroundColor:"#101010", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}} sx={{ fontSize: { lg: "28px", xs: "22px" }}} color="#000">
                    {item.video.title}
                  </Typography>
                </Box>
              </a>
          ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos