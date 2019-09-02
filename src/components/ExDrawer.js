import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { withRouter } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExNavigatorItem from './ExNavigatorItem'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import HomeIcon from '@material-ui/icons/Home'
import PaymentIcon from '@material-ui/icons/Payment'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import PublishIcon from '@material-ui/icons/Publish'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';



export const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function ExDrawer(props) {
  const { container, mobileOpen, handleDrawerToggle, accounts = [], history, onLogout } = props;
  const classes = useStyles();
  const theme = useTheme();

  function navigate(to) {
    history.push(to)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      
      <Divider />
      
      <List>
        <ExNavigatorItem to={'Home'} onNavigate={_ => navigate('/')}>
          <HomeIcon />
        </ExNavigatorItem>
        <ExNavigatorItem to={'Logout'} onNavigate={_ => { navigate('/'); onLogout() }}>
          <PowerSettingsNewIcon />
        </ExNavigatorItem>
      </List>

      <Divider />

      {accounts.map(account => (
        <React.Fragment key={account.id}>
          <Divider />
          <List>
            <ExNavigatorItem to={account.name} onNavigate={_ => navigate(`/accounts/${account.id}`)}>
              <AccountBalanceIcon />
            </ExNavigatorItem>
            <List component="div" disablePadding>
              <ExNavigatorItem className={classes.nested} to='Add Movement' onNavigate={_ => navigate(`/accounts/${account.id}/addMovement`)}>
                <PaymentIcon />
              </ExNavigatorItem>
              <ExNavigatorItem className={classes.nested} to='Analysis' onNavigate={_ => navigate(`/accounts/${account.id}/analyze`)}>
                <ShowChartIcon />
              </ExNavigatorItem>
              <ExNavigatorItem className={classes.nested} to='Import' onNavigate={_ => navigate(`/accounts/${account.id}/import`)}>
                <PublishIcon />
              </ExNavigatorItem>
              <ExNavigatorItem className={classes.nested} to='Export' onNavigate={_ => navigate(`/accounts/${account.id}/export`)}>
                <SaveAltIcon />
              </ExNavigatorItem>
            </List>
          </List>
        </React.Fragment>
      ))}
      <Divider />
    </div>
  );

  return (
    <nav className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default withRouter(ExDrawer)