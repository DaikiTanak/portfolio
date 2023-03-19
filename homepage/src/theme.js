import * as React from 'react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#aa2e25",
    },
    secondary: {
      main: "#00a152",
    },
  },
  background: {
    default: '#fffdfa',
  },
});

export default theme