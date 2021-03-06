import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { authenticate } from '../actions/authentication';
import { Link as RouterLink } from 'react-router-dom'

class LoginView extends React.Component {

    state = {
        userName: '',
        password: ''
    }

    onUserNameChanged = (userName) => {
        this.setState({
            userName
        })
    }

    onPasswordChanged = (password) => {
        this.setState({
            password
        })
    }

    onSignIn = (e) => {
        const { userName, password } = this.state
        const { login } = this.props
        e.preventDefault()
        login(userName, password)
        this.setState({
            userName: '',
            password: ''
        })
    }

    render() {
        const { classes } = this.props
        const { userName, password } = this.state
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus value={userName} onChange={e => this.onUserNameChanged(e.target.value)} />
                        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={password} onChange={e => this.onPasswordChanged(e.target.value)} />
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={this.onSignIn}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link component={RouterLink} to="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
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
        alignItems: 'flex-start',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

const mapDispatchToProps = (dispatch) => {
    return { login: (userName, password) => dispatch(authenticate(userName, password)) }
}

const mapStateToProps = _ => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginView))