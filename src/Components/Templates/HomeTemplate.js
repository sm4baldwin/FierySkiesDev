import React from 'react'
import {Link as RouterLink} from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'

export const Home = (props) => {
    const theme = useTheme()
    const smallMedia = useMediaQuery(theme.breakpoints.down('sm'))
    const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))
    
    return (
        <Paper square style={{height: '100%', width: '100%', padding: '3em'}}>

            <Grid container direction='column' alignItems='center' justify='center' spacing={3}>

                <Grid item>
                    <Typography variant='h4'>{props.prompt}</Typography>
                </Grid>

                <Grid item container justify='center'>
                    {props.pages.map((page, i) => {
                        return (
                            <Grid item key={i}>
                                
                                <Button to={page.url} component={RouterLink}
                                    color="primary" 
                                    variant='contained'
                                    size={smallMedia ? 'small' : mediumMedia ? 'medium' : 'large'}
                                    style={{margin: '0 1em'}}
                                >
                                    {page.title}
                                </Button>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Paper>
    )
}