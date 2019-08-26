import React from 'react'
import AccountRow from './AccountRow'

import {  Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const AccountsOverview = (props) => {
    const { accounts } = props

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {['Id', 'Name', 'Start Date', 'Starting Balance', 'Balance', ''].map(title => <TableCell key={title}>{title}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {accounts.map(account => <AccountRow key={account.id} account={account} />)}
            </TableBody>
        </Table>
    )
}

export default AccountsOverview