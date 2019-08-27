import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatCents } from '../util'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { TableRow, TableCell, IconButton } from '@material-ui/core';
import { deleteMovementAsync } from '../actions/movements'
import DeleteDialog from './DeleteDialog'


const MovementRow = props => {

    const [open, setOpen] = React.useState(false);
    const { movement, onDeleteMovement, history } = props

    return (
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
            <TableCell>
                <IconButton color='primary' onClick={e => history.push(`/accounts/${movement.accountId}/editMovement/${movement.id}`)} ><EditIcon /></IconButton>
            </TableCell>
            <TableCell>
                <IconButton color='primary' onClick={e => setOpen(true)}><DeleteIcon /></IconButton>
                <DeleteDialog
                    open={open}
                    message={`Really delete movement ${movement.description}?`}
                    onDelete={() => onDeleteMovement(movement)}
                    setOpen={setOpen}
                />
            </TableCell>
        </TableRow>)
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteMovement: movement => dispatch(deleteMovementAsync(movement))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovementRow))