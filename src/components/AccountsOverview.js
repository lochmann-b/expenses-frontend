import React from 'react'
import { formatCents } from '../util'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const AccountsOverview = (props) => {
    const { accounts } = props
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {['Id', 'Name', 'Start Date', 'Starting Balance', 'Balance'].map(title => <TableCell key={title}>{title}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {accounts.map(account => (
                    <TableRow key={account.id}>
                        <TableCell>
                            {account.id}
                        </TableCell>
                        <TableCell>
                            {account.name}
                        </TableCell>
                        <TableCell>
                            {account.startDate}
                        </TableCell>
                        <TableCell>
                            {formatCents(account.startingBalanceInCents)}
                        </TableCell>
                        <TableCell>
                            {formatCents(account.movements.reduce((accumulator, m) => m.amountInCents + accumulator, account.startingBalanceInCents))}
                        </TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>
    )
}

export default AccountsOverview