import React from 'react'
import BasePage from './BasePage'
import { connect } from 'react-redux'
import MovementsOverview from './MovementsOverview'
import { makeStyles } from '@material-ui/core/styles'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { withRouter } from 'react-router-dom'

const Account = props => {
    const { account, history } = props
    const classes = useStyles()

    return (
        <BasePage title={account.name}>     
            <MovementsOverview movements={account.movements} />
            <Fab onClick={_ => history.push(`/accounts/${account.id}/addMovement`)} className={classes.fab} size="small" color="secondary"><AddIcon /></Fab>
        </BasePage>)

}

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}))


const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id)
    const account = state.accounts.find(acccount => acccount.id === id)
    return {
        account
    }
}

export default connect(mapStateToProps)(withRouter(Account))

