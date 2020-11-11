import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme, makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.background.default,
      padding: '2vw',
      minHeight: '100vh'
    },
    paper: {
        background: theme.palette.paper,
        borderRadius: '1em',
    },
    gridItem: {
        width:'100%',
        
    },
    listItem: {
        border: '.2em solid ' + theme.palette.grey[600],
        padding: '1em',
    }
  }));

export function EncourageTemplate(props) {
    const theme = useTheme()
    const classes = useStyles()
    const smallMedia = useMediaQuery(theme.breakpoints.down('xs'))
    const mediumMedia = useMediaQuery(theme.breakpoints.between('sm', 'md'))

    return (
        // The background of the page, responsive
        <Grid
            container
            direction='column'
            justify='space-between'
            alignItems='center'
            className={classes.root}
        >
            {/* The top button and form interaction */}
            <Grid item className={classes.gridItem}>

                <Paper
                    elevation={5}
                    className={classes.paper}
                    style={{border: '.2em solid ' + theme.palette.grey[600]}}>

                    <Grid
                        container
                        direction='column'
                        justify='space-between'
                        alignItems='center'
                        >
                        {/* Randomize Button */}
                        <Grid item>
                            <Button
                                variant='contained'
                                color='primary'
                                size={smallMedia ? 'small' : mediumMedia ? 'medium' : 'large'}
                                >
                                Placeholder
                            </Button>
                        </Grid>
                        {/* Encouragement Text */}
                        <Grid item>
                            <Paper style={{border: 'solid 1px green'}}>
                                Encouragement Text
                            </Paper>
                            {/* Adding a form in a minute */}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Paper elevation={5} className={classes.paper}>
                    {/* Ordering the rows in flex column for responsive devices */}
                    <Grid
                        container
                        direction='column'
                        justify='space-evenly'
                        alignItems='center'
                    >
                        {/* The row item itself, to be mapped from a prop */}
                        {props.greetings.map( (item, i, array) => (
                            <Grid
                            item
                            container
                            direction={smallMedia ? 'column' : 'row'}
                            justify='space-between'
                            wrap='nowrap'
                            alignItems='center'
                            className={classes.listItem}
                            style={
                                i === 0 ? {
                                    borderRadius: '1em 1em 0 0',
                                    borderBottom: 'none'
                                } : 
                                i === array.length - 1 ? 
                                {
                                    borderBottom: '.2em solid ' + theme.palette.grey[600],
                                    borderRadius: '0 0 1em 1em'
                                }
                                : {
                                    borderBottom: 'none'
                                }
                            }
                            key={i}
                        >
                            <Grid item>
                                <Typography align='left' variant='body1' style={{margin: '0 1em 0 0'}}>
                                    [Greeting]: {item.newGreeting}
                                </Typography>
                                {item.response && <Typography align='left' variant='body1' style={{margin: '0 1em 0 0'}}>
                                    [Response]: {item.response}
                                </Typography>}
                            </Grid>
                            <Grid item style={{minWidth: '9rem'}}>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    size={smallMedia ? 'small' : mediumMedia ? 'medium' : 'large'}
                                    style={{float: 'right'}}
                                >
                                    <Typography variant='button' align='center'>Mark as Read?
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                        ))}

                    </Grid>
                </Paper>
            </Grid>

        </Grid>
    )
}