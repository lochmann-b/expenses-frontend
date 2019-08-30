import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import BasePage from './BasePage'
import { TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { createMovementAsync, updateMovementAsync } from '../actions/movements';
import { today } from '../util'

class ManageMovement extends React.Component {

    state = {
        date: this.props.movement ? this.props.movement.date : today(),
        description: this.props.movement ? this.props.movement.description : '',
        amount: this.props.movement ? this.props.movement.amountInCents / 100.0 : 0.00,
    }

    onDateChanged = (date) => {
        this.setState({
            date
        })
    }

    onDescriptionChanged = (description) => {
        this.setState({
            description
        })
    }

    onAmountChanged = amount => {
        this.setState({
            amount
        })
    }

    onCreateMovement = (e) => {
        const { date, description, amount } = this.state
        const { createMovement } = this.props
        const { accountId } = this.props.match.params
        e.preventDefault()

        createMovement({
            accountId,
            description,
            date,
            amountInCents: amount * 100
        })

        this.setState({
            description: '',
            amount: 0.0
        })
    }

    onUpdateMovement = (e) => {
        const { date, description, amount } = this.state
        const { updateMovement, history, movement } = this.props
        e.preventDefault()
        updateMovement({
            ...movement,
            description,
            date,
            amountInCents: amount * 100
        })
        history.push(`/accounts/${movement.accountId}`)
    }

    render() {
        const { movement, classes } = this.props
        const { date, amount, description } = this.state
        return (
            <BasePage title={movement ? 'Edit Movement' : 'New Movement'}>
                <form className={classes.form} noValidate>
                    <TextField margin="normal" required fullWidth id="description" label="Description" name="description" autoFocus value={description} onChange={e => this.onDescriptionChanged(e.target.value)} />
                    <TextField InputLabelProps={{ shrink: true }} margin="normal" type="date" required fullWidth id="date" label="Date" name="date" value={date} onChange={e => this.onDateChanged(e.target.value)} />
                    <TextField onClick={e => e.target.select()} margin="normal" required fullWidth name="amount" label="Amount" type="number" step="0.01" id="amount" value={amount} onChange={e => this.onAmountChanged(e.target.value)} />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={movement ? this.onUpdateMovement : this.onCreateMovement}>
                        {movement ? 'Update' : 'Create'}
                    </Button>
                </form>
            </BasePage >
        )
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

const mapStateToProps = (state, ownProps) => {
    if (ownProps.match.params.accountId && ownProps.match.params.id) {
        const accountId = parseInt(ownProps.match.params.accountId)
        const id = parseInt(ownProps.match.params.id)
        const account = state.accounts.find(acccount => acccount.id === accountId)
        if (account) {
            const movement = account.movements.find(m => m.id === id)
            if (movement) {
                return {
                    movement
                }
            }
        }
    }
    return {}
}


const mapDispatchToProps = dispatch => {
    return {
        createMovement: movement => dispatch(createMovementAsync(movement)),
        updateMovement: movement => dispatch(updateMovementAsync(movement))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(ManageMovement)))