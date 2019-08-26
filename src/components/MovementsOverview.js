import React from 'react'
import { formatCents } from '../util'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const MovementsOverview = (props) => {
    const { movements } = props
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {['Id', 'Description', 'Date', 'Amount'].map(title => <TableCell key={title}>{title}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {movements.map(movement => (
                    <TableRow key={movement.id}>
                        <TableCell>
                            {movement.id}
                        </TableCell>
                        <TableCell>
                            {movement.description}
                        </TableCell>
                        <TableCell>
                            {movement.date}
                        </TableCell>
                        <TableCell>
                            {formatCents(movement.amountInCents)}
                        </TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>
    )
}

export default MovementsOverview