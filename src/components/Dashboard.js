import React from 'react'
import { withRouter } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import BasePage from './BasePage'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import AccountsOverview from './AccountsOverview'


const Dashboard = props => {

    const { accounts = [], history } = props
    const classes = useStyles()
    return (
        <BasePage title='Dashboard'>
            <AccountsOverview accounts={accounts} />
            <Fab className={classes.fab} color="primary" aria-label="add" size='small' onClick={() => history.push('/addAccount')}>
                <AddIcon />
            </Fab>
        </BasePage>)

}

const useStyles = makeStyles(theme => ({    
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))


export default withRouter(Dashboard)