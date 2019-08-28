import React from 'react'
import { connect } from 'react-redux'
import { CssBaseline, Paper, Container} from '@material-ui/core';
import ExAppBar from './ExAppBar'
import { makeStyles } from '@material-ui/core/styles'
import SnackbarError from './SnackbarError'

const BasePage = props => {
    const classes = useStyles()
    const { children, title, logout, onAdd, errors } = props
    return (
        <Container maxWidth="xl" >
            <CssBaseline />
            <ExAppBar title={title} logout={logout} onAdd={onAdd} />
            <Paper className={classes.root}>
                {(errors.length > 0) && errors.map(e => {console.log(`creating error snackbar with key ${e.timestamp}`); return (<SnackbarError key={e.timestamp} error = {e} />)})  }
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

const mapStateToProps = state => {
    const { errors } = state
    return {
        errors
    }
}

export default connect(mapStateToProps)(BasePage)