import React from 'react'
import { withRouter } from 'react-router-dom'
import BasePage from './BasePage'
import AccountsOverview from './AccountsOverview'


const Dashboard = props => {

    const { accounts = [], history } = props
    return (
        <BasePage title='Dashboard' onAdd={() => history.push('/addAccount')}>
            <AccountsOverview accounts={accounts} />
        </BasePage>)

}



export default withRouter(Dashboard)