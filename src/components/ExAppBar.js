import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { logout } from '../actions/authentication'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home'
import RefreshIcon from '@material-ui/icons/Refresh'

import { withRouter } from 'react-router-dom'
import { loadAccountsAsync } from '../actions/accounts';

const ExAppBar = props => {
  const classes = useStyles()
  const { title, history, isAuthenticated, onLogout, onRefresh} = props

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" onClick={() => history.push('/')}><HomeIcon /></IconButton>
        <Typography variant="caption" align="center" className={classes.title}>{title}</Typography>
        <IconButton color="inherit" onClick={onRefresh}><RefreshIcon /></IconButton>
        {isAuthenticated && <Button color="inherit" onClick={() => { onLogout(); history.push('/') }}>Logout</Button>}
      </Toolbar>
    </AppBar>
  )
}



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))


const mapStateToProps = state => {
  return {
    isAuthenticated: state.authentication !== ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout()),
    onRefresh: () => dispatch(loadAccountsAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ExAppBar))