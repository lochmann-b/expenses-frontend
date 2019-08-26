import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import BasePage from './BasePage'
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { createAccountAsync } from '../actions/accounts';

class AddAccount extends React.Component {

    state = {
        startDate: '',
        accountName: '',
        startingBalance: 0.00
    }

    onStartDateChanged = (startDate) => {
        this.setState({
            startDate
        })
    }

    onAccountNameChanged = (accountName) => {
        this.setState({
            accountName
        })
    }

    onStartingBalanceChanged = startingBalance => {
        this.setState({
            startingBalance
        })
    }

    onCreateAccount = (e) => {
        const { startDate, accountName, startingBalance } = this.state
        const { createAccount, token, history } = this.props
        e.preventDefault()
        createAccount(token, {
            name: accountName,
            startDate,
            startingBalanceInCents: startingBalance * 100
        })
        
        history.push('/')
    }

    render() {
        const { classes } = this.props
        const { startDate, startingBalance, accountName } = this.state
        return (
            <BasePage title='New Account'>
                <form className={classes.form} noValidate>
                    <TextField margin="normal" required fullWidth id="name" label="Account name" name="name" autoFocus value={accountName} onChange={e => this.onAccountNameChanged(e.target.value)} />
                    <TextField InputLabelProps={{ shrink: true }} margin="normal" type="date" required fullWidth id="date" label="Start Date" name="date" value={startDate} onChange={e => this.onStartDateChanged(e.target.value)} />
                    <TextField margin="normal" required fullWidth name="startingBalance" label="Starting Balance" type="number" step="0.01" id="password" value={startingBalance} onChange={e => this.onStartingBalanceChanged(e.target.value)} />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={this.onCreateAccount}>
                        Create
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
});

const mapStateToProps = (state) => {
    return {
        token: state.authentication
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return { createAccount: (token, account) => dispatch(createAccountAsync(token, account)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(AddAccount)))