import React from 'react'
import BasePage from './BasePage'

import { makeStyles } from '@material-ui/core/styles'
import AccountsOverview from './AccountsOverview';

const Dashboard = props => {
    
    const { accounts = [] } = props
    return (
        <BasePage title='Dashboard'>
            <AccountsOverview accounts={accounts} />
        </BasePage>)
       
}
export default Dashboard