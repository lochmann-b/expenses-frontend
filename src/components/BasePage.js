import React from 'react'
import { connect } from 'react-redux'
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Messages from './Messages'
import ExDrawer from './ExDrawer'
import ExAppBar from './ExAppBar'

import { loadAccountsAsync } from '../actions/accounts'

const BasePage = props => {
    const classes = useStyles()
    const { children, title, onRefresh } = props
    const [mobileOpen, setMobileOpen] = React.useState(false)

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <ExAppBar title={title} onToggleDrawer={handleDrawerToggle} onRefresh={onRefresh} />
            <ExDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Messages />
                {children}
            </main>
        </div >)
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const mapDispatchToProps = dispatch => {
    return {
        onRefresh: _ => dispatch(loadAccountsAsync())
    }
}

const mapStateToProps = _ => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BasePage)