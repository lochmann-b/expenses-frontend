import React from 'react'
import { CssBaseline, Paper, Container} from '@material-ui/core';
import ExAppBar from './ExAppBar'

import { makeStyles } from '@material-ui/core/styles'
import AccountsOverview from './AccountsOverview';

const Dashboard = props => {
    const classes = useStyles()
    const { accounts = [] } = props
    return (
        <Container maxWidth="md" >
            <CssBaseline />
            <ExAppBar title='Dashboard' />
            <Paper className={classes.root}>
                <AccountsOverview accounts={accounts} />
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

export default Dashboard