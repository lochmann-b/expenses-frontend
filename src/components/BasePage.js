import React from 'react'
import { CssBaseline, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Messages from './Messages'

const BasePage = props => {
    const classes = useStyles()
    const { children } = props
    return (
        <Container maxWidth="xl" >
            <CssBaseline />
            <Paper className={classes.root}>
                <Messages />
                {children}
            </Paper>
        </Container>)
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },

}));

export default BasePage