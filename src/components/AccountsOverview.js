import React from 'react'
import AccountRow from './AccountRow'

import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';


const AccountsOverview = (props) => {
    const { accounts } = props
    const titles = [
        {title:'Name', align: 'left'},
        {title:'Balance', align:'right'},
        {title:'Edit', align:'center'},
        {title:'Delete', align:'center'}
    ]

    return (
        <Table size='small'>
            <TableHead>
                <TableRow>
                    {titles.map(title => <TableCell align={title.align} padding='none' key={title.title}>{title.title}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {accounts.map(account => <AccountRow key={account.id} account={account} />)}
            </TableBody>
        </Table>
    )
}

export default AccountsOverview