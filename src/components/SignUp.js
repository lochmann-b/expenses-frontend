import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink, withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { signUpAsync } from '../actions/user';
import Messages from './Messages'


class SignUp extends React.Component {

    state = {
        name: '',
        login: '',
        password: '',
        confirmPassword: ''
    }

    onInputChanged = e =>
        this.setState({
            [e.target.name]: e.target.value
        })


    hasValidationErrors() {
        const { name, login, password, confirmPassword } = this.state;
        if (name.length < 1) {
            return true
        }
        if (login.length < 1) {
            return true
        }
        if (password.length < 1) {
            return true
        }
        if (confirmPassword.length < 1) {
            return true
        }
        if (this.passwordsDontMatch()) {
            return true
        }
        return false
    }

    passwordsDontMatch() {
        const { password, confirmPassword } = this.state;
        return password !== confirmPassword
    }

    onSignup = e => {
        e.preventDefault()

        const { name, login, password } = this.state;
        const { signup } = this.props

        const user = {
            name,
            login,
            password
        }
        signup(user)
        this.setState({
            name: '',
            login: '',
            password: '',
            confirmPassword: ''
        })
    }

    render() {
        const { classes } = this.props
        const { name, login, password, confirmPassword } = this.state;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Messages />
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    value={name}
                                    onChange={this.onInputChanged}
                                    autoComplete="name"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={login}
                                    onChange={this.onInputChanged}
                                    autoComplete="login"
                                    name="login"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="login"
                                    label="Login Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={password}
                                    onChange={this.onInputChanged}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={confirmPassword}
                                    onChange={this.onInputChanged}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="current-password"
                                    className={classes.passwordsDontMath}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.passwordsDontMath} hidden={!this.passwordsDontMatch()}>Passwords don't match</Typography>
                            </Grid>

                        </Grid>
                        <Button
                            disabled={this.hasValidationErrors()}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.onSignup}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link component={RouterLink} to="/" variant="body2">
                                    Already have an account? Sign in
                  </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    passwordsDontMath: {
        color: 'red',
    }
});

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signUpAsync(user))
    }
}

const mapStateToProps = state => {    
    return {  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(SignUp)))