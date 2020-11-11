import {responsiveFontSizes, createMuiTheme} from '@material-ui/core/styles'



export const theme = responsiveFontSizes(createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#167878',
      },
      secondary: {
        main: '#ffab91',
      },
    },
    breakpoints: {
      'xs': 0, 
      'sm': 520, 
      'md': 800, 
      'lg': 1200, 
      'xl': 1700
    }
  }), {breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'], factor: 3})