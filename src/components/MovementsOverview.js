import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import MovementRow from './MovementRow';

const MovementsOverview = (props) => {
    const { movements } = props
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {['Id', 'Description', 'Date', 'Amount', 'Edit', 'Delete'].map(title => <TableCell key={title}>{title}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {movements.map(movement => (<MovementRow key={movement.id} movement={movement} />))}
            </TableBody>
        </Table>
    )
}

export default MovementsOverview