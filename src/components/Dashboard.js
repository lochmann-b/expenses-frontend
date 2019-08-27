import React from 'react'
import { withRouter } from 'react-router-dom'
import BasePage from './BasePage'
import AccountsOverview from './AccountsOverview'
import AddIcon from '@material-ui/icons/Add'
import { Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



const Dashboard = props => {

    const { accounts = [], history } = props
    const classes = useStyles()
    return (
        <BasePage title='Dashboard'>
            <AccountsOverview accounts={accounts} />
            <Fab onClick={e => history.push('/addAccount')} className={classes.fab} size="small" color="secondary"><AddIcon /></Fab>
        </BasePage>)

}

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}))

export default withRouter(Dashboard)