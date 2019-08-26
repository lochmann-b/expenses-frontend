import React from 'react'
import { CssBaseline, Paper, Container } from '@material-ui/core';
import ExAppBar from './ExAppBar'

import { makeStyles } from '@material-ui/core/styles'

const BasePage = props => {
    const classes = useStyles()
    const { children, title, logout} = props
    return (
        <Container maxWidth="md" >
            <CssBaseline />
            <ExAppBar title={title} logout={logout} />
            <Paper className={classes.root}>
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