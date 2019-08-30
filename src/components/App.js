import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginView from './LoginView';
import Dashboard from './Dashboard'
import Component404 from './Component404'
import Loading from './Loading'
import Account from './Account'
import ManageAccount from './ManageAccount';
import ManageMovement from './ManageMovement';
import SignUp from './SignUp';
import MovementsInPeriod from './MovementsInPeriod'

class App extends React.Component {
    render() {
        const { loading, authentication, accounts = [] } = this.props
        return (
            <Router>
                <Fragment>
                    {
                        loading === true
                            ? <Loading />
                            : authentication === ''
                                ? <div>
                                    <Switch>
                                        <Route exact path='/signup' component={SignUp} />}  />
                                        <Route component={LoginView} />}  />
                                    </Switch>
                                </div>
                                : <div>
                                    <Switch>
                                        <Route exact path='/' render={_ => <Dashboard accounts={accounts} />} />
                                        <Route exact path='/editAccount/:id' component={ManageAccount} />}  />
                                        <Route exact path='/addAccount' component={ManageAccount} />}  />
                                        <Route exact path='/accounts/:id' component={Account} />}  />
                                        <Route exact path='/accounts/:accountId/editMovement/:id' component={ManageMovement} />}  />
                                        <Route exact path='/accounts/:accountId/addMovement' component={ManageMovement} />}  />
                                        <Route exact path=' /accounts/:accountId/analyze' component={MovementsInPeriod} />}  />
                                       
                                        <Route exact path='/signup' component={SignUp} />}  />
                                        <Route component={Component404} />
                                    </Switch>
                                </div>
                    }
                </Fragment>
            </Router>
        )
    }
}

function mapSteteToProps({ loading, authentication, accounts }) {
    return {
        loading,
        authentication,
        accounts
    }
}

export default connect(mapSteteToProps)(App)