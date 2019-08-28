import React from 'react'
import ErrorIcon from '@material-ui/icons/Error'
import { Snackbar, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { clearError } from '../actions/errors'

const SnackbarError = props => {
    const { error, clearError } = props
    const classes = useStyles()
    const [open, setOpen] = React.useState(true);

    return (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center', }} open={open} onClose={() => {setOpen(false); clearError(error)} } autoHideDuration={6000}        >
            <SnackbarContent className={classes.error} message={<span className={classes.message} id="message-id"><ErrorIcon className={classes.icon} />{error.message}</span>} />
        </Snackbar>
    )

}

const useStyles = makeStyles(theme => ({
    error: {
        backgroundColor: theme.palette.error.dark,
    },

    icon: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },

    message: {
        display: 'flex',
        alignItems: 'center',
    },

}));

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearError: error => dispatch(clearError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarError)