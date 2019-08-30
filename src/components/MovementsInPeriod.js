import React, { Component } from 'react'
import { connect } from 'react-redux'
import BasePage from './BasePage'
import { calculateAccountBalanceTo, sumExpenses, sumIncome } from '../util'
import { Typography } from '@material-ui/core';


class MovementsInPeriod extends Component {
    render() {

        const { account, from, to } = this.props

        const balanceStart = calculateAccountBalanceTo(account, from)
        const income = -sumIncome(account, from, to)
        const expenses = -sumExpenses(account, from, to)

        return (
            <BasePage title={account.name}>
                <Typography>{`Starting Balance: ${balanceStart}`}</Typography>                
                <Typography>{` Sum Income: ${income}`}</Typography>                
                <Typography>{` Sum expenses: ${expenses}`}</Typography>                
                <Typography>{`Closing Balance: ${balanceStart - expenses + income}`}</Typography>                
            </BasePage>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id)
    const account = state.accounts.find(acccount => acccount.id === id)
    return {
        account,
        from: new Date(new Date().getFullYear, new Date().getMonth(), 1, 0, 0, 0, 0),
        to: new Date(new Date().getFullYear, new Date().getMonth(), 0, 0, 0, 0, 0)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovementsInPeriod)