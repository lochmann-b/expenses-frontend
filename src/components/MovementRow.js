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
            <MakeCell component='th'>
                {movement.id}
            </MakeCell>
            <MakeCell>
                {movement.description}
            </MakeCell>
            <MakeCell>
                {movement.date}
            </MakeCell>
            <MakeCell align='right'>
                {formatCents(movement.amountInCents)}
            </MakeCell>
            <MakeCell padding='checkbox' align='center'>
                <IconButton color='primary' onClick={_ => history.push(`/accounts/${movement.accountId}/editMovement/${movement.id}`)} ><EditIcon fontSize={'small'} /></IconButton>
            </MakeCell>
            <MakeCell padding='checkbox' align='center'>
                <IconButton color='primary' onClick={_ => setOpen(true)}><DeleteIcon fontSize='small'/></IconButton>
                <DeleteDialog
                    open={open}
                    message={`Really delete movement ${movement.description}?`}
                    onDelete={() => onDeleteMovement(movement)}
                    setOpen={setOpen}
                />
            </MakeCell>
        </TableRow>)
}

const MakeCell = props => {
    
    const { children, ...other} = props
    return (<TableCell size='small' {...other}>{children}</TableCell>)
}

const mapStateToProps = _ => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteMovement: movement => dispatch(deleteMovementAsync(movement))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MovementRow))