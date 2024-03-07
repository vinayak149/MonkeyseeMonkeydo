import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Widget(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} size={200} thickness={6} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary"
        sx={{
            fontFamily: 'Roboto', // Set the font family to Arial
            fontSize: '2rem', // Set the font size to 1rem
            fontWeight: 'bold', // Make the font weight bold
          }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

Widget.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
  const [progress, setProgress] = useState(10);

  // Simulating an API call to get the current progress stage
  useEffect(() => {
    // Placeholder for where you would fetch data from an API
    const stages = [20, 40, 60, 80, 100]; // Example stages
    const fetchProgress = async () => {
      // Simulate fetching progress from an API
      // This would be replaced with your actual API call
      //const response = await fetch('your-api-endpoint');
      //const data = await response.json();
      // setProgress(data.progress);

      // Simulating progress update for demonstration
      let currentIndex = stages.findIndex(stage => stage === progress);
      if (currentIndex === -1 || currentIndex === stages.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      setProgress(stages[currentIndex]);
    };

    const timer = setInterval(() => {
      fetchProgress();
    }, 2000); // Update progress every 2 seconds for demo

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <Box sx={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Widget value={progress} />
    </Box>
  );
}
