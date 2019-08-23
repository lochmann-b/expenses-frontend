import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginView from './LoginView';
import Dashboard from './Dashboard'
import Component404 from './Component404'
import { loadAccounts } from '../actions/accounts'
import Loading from './Loading'

class App extends React.Component {
    render() {
        const { loading, authentication, accounts=[] } = this.props
        console.log(`accounts=${accounts}`)
        return (
            <Router>
                <Fragment>
                    {
                        loading === true
                            ? <Loading />
                            : authentication === ''
                                ? <LoginView />
                                : <div>
                                    <Switch>
                                        <Route exact path='/' render={props => <Dashboard accounts={accounts}/>}  />
                                        <Route component={Component404} />
                                    </Switch>
                                </div>
                    }
                </Fragment>
            </Router>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadAccounts: authentication => dispatch(loadAccounts(authentication))
    }
}

function mapSteteToProps({ loading, authentication, accounts }) {
    return {
        loading,
        authentication,
        accounts
    }
}

export default connect(mapSteteToProps, mapDispatchToProps)(App)