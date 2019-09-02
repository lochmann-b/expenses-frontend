import React, { Component } from 'react'
import { connect } from 'react-redux'
import BasePage from './BasePage'
import { calculateAccountBalanceTo, sumExpenses, sumIncome, formatCents, getFirstOfMonth, getLastOfMonth, toShortDateStr } from '../util'
import { Typography, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

class MovementsInPeriod extends Component {

    state = {
        from: toShortDateStr(getFirstOfMonth()),
        to: toShortDateStr(getLastOfMonth())
    }

    render() {

        const { account, classes } = this.props

        const { from, to } = this.state

        const balanceStart = calculateAccountBalanceTo(account, from)
        const income = -sumIncome(account, new Date(from), new Date(to))
        const expenses = -sumExpenses(account, new Date(from), new Date(to))
        const closingBalance = balanceStart + income + expenses

        console.log('values are', typeof (balanceStart), typeof (income), typeof (expenses), typeof (closingBalance))
        return (
            <BasePage title={account.name}>
                <form className={classes.form} noValidate>
                    <TextField InputLabelProps={{ shrink: true }} margin="normal" type="date" required fullWidth id="from" label="Date From" name="from" value={from} onChange={this.onDateChanged} />
                    <TextField InputLabelProps={{ shrink: true }} margin="normal" type="date" required fullWidth id="to" label="Date To" name="to" value={to} onChange={this.onDateChanged} />
                    <Typography>{`Starting Balance: ${formatCents(balanceStart)}`}</Typography>
                    <Typography>{` Sum Income: ${formatCents(income)}`}</Typography>
                    <Typography>{` Sum expenses: ${formatCents(expenses)}`}</Typography>
                    <Typography>{`Closing Balance: ${formatCents(closingBalance)}`}</Typography>
                </form>


            </BasePage>
        )
    }

    onDateChanged = e => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
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
    }
}

const styles = theme => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        padding: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovementsInPeriod))