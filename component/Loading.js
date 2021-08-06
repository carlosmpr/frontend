import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex' , background:'black'}}>
      <CircularProgress />
    </Box>
  );
}