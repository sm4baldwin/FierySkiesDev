import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

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
        padding: '1em'
    },
    gridItem: {
        width:'100%',
        marginBottom: '1em'
        
    },
    listItem: {
        padding: '1em',
    },
    buttonFocus: {
        backgroundColor: theme.palette.primary.dark
    },
    encouragement: {
        textTransform: 'capitalize'
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
                >

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
                                disableRipple={true}
                                focusVisibleClassName={classes.buttonFocus}
                                size={smallMedia ? 'small' : mediumMedia ? 'medium' : 'large'}
                                onClick={(e) => {
                                    e.preventDefault()
                                    props.randomizeEncouragement()}
                                }
                                >
                                {props.prompt}
                            </Button>
                        </Grid>
                        {/* Encouragement Text */}
                        <Grid item style={{padding: '1em'}}>
                            <Typography variant='h4' className={classes.encouragement}>
                                {props.encouragement}
                            </Typography>
                        </Grid>
                        {/* New response form */}
                        <Grid item style={{padding: '1em'}}>
                            <form onSubmit={props.submitNewGreeting}>
                                <FormControl >
                                    <InputLabel htmlFor="my-input">New Encouragement</InputLabel>
                                    <Input 
                                        id="my-input" 
                                        aria-describedby="my-helper-text" 
                                        onChange={props.handleOnFormChange}
                                        value={props.newGreeting}/>
                                    <Button
                                        variant='outlined'
                                        color='secondary'
                                        disableRipple={true}
                                        focusVisibleClassName={classes.buttonFocus}
                                        size='small'
                                        type='submit'
                                        style={{marginTop: '.5em'}}
                                    >
                                        {props.newGreetingPrompt}
                                    </Button>
                                    <FormHelperText id="my-helper-text">Because kindness is even more contagious</FormHelperText>
                                </FormControl>
                            </form>
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
                            alignItems={smallMedia ? 'flex-start' : 'center'}
                            className={classes.listItem}
                            style={i === 0 ? {borderRadius: '1em 1em 0 0',} : 
                                i === array.length - 1 ? {borderRadius: '0 0 1em 1em'} : {}
                            }
                            key={i}
                        >
                            <Grid item>
                                <Typography align='left' variant='body1' style={{margin: '0 1em 0 0'}}>
                                    <strong style={{color: theme.palette.secondary.main}}>[Greeting]:</strong> {item.newGreeting}
                                </Typography>
                                {item.response && <Typography align='left' variant='body1' style={{margin: '0 1em 0 0'}}>
                                    <strong style={{color: theme.palette.secondary.main}}>[Response]:</strong> {item.response}
                                </Typography>}
                            </Grid>
                            <Grid item style={smallMedia ? {margin: '0 auto'} : {minWidth: '11rem',}}>
                                {!item.read && <Button
                                    variant='contained'
                                    color='default'
                                    disableRipple={true}
                                    focusVisibleClassName={classes.buttonFocus}
                                    size='small'
                                    // style={{float: 'right'}}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        props.markRead(item.id)
                                    }}
                                >
                                    <Typography variant='button' align='center'>Mark as Read
                                    </Typography>
                                </Button>}
                            {item.read && <form onSubmit={props.submitResponse}>
                            <FormControl >
                                <InputLabel htmlFor="response">Response:
                                </InputLabel>
                                <Input 
                                    id="response" 
                                    onChange={props.handleResponseChange}
                                    value={props.response}/>
                                <Button
                                    variant='outlined'
                                    color='default'
                                    disableRipple={true}
                                    focusVisibleClassName={classes.buttonFocus}
                                    size='small'
                                    type='submit'
                                    style={{marginTop: '.5em'}}
                                >
                                    {item.response ? 'Update' : 'Respond'}
                                </Button>
                            </FormControl>
                            </form>
                            }
                            {item.read && <Button
                                    variant='text'
                                    color='default'
                                    disableRipple={true}
                                    focusVisibleClassName={classes.buttonFocus}
                                    size='small'
                                    style={!smallMedia ? {float: 'right'} : {}}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        props.deleteGreeting(item.id)
                                    }}
                                >
                                    <Typography variant='button' align='center'>Delete
                                    </Typography>
                                </Button>}
                            </Grid>
                        </Grid>
                        ))}

                    </Grid>
                </Paper>
            </Grid>

        </Grid>
    )
}