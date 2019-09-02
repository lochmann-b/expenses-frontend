import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core/';
import RefreshIcon from '@material-ui/icons/Refresh'
import MenuIcon from '@material-ui/icons/Menu'
import { drawerWidth } from './ExDrawer'

const ExAppBar = props => {
  const classes = useStyles()
  const { title, onRefresh, onToggleDrawer } = props
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" onClick={onToggleDrawer}><MenuIcon /></IconButton>
        <Typography variant="caption" align="center" className={classes.title}>{title}</Typography>
        <IconButton color="inherit" onClick={onRefresh}><RefreshIcon /></IconButton>
      </Toolbar>
    </AppBar>
  )
}



const useStyles = makeStyles(theme => ({  
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  title: {
    flexGrow: 1,
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  }
}))

export default ExAppBar