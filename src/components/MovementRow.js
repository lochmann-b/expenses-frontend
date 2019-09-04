import React from 'react'
import { connect } from 'react-redux'
import { formatCents, toGermanShortDateStr } from '../util'
import DeleteIcon from '@material-ui/icons/Delete'
import { TableRow, TableCell, IconButton, Link } from '@material-ui/core';
import { deleteMovementAsync } from '../actions/movements'
import DeleteDialog from './DeleteDialog'
import { Link as BrowserLink} from 'react-router-dom'



const MovementRow = props => {

    const [open, setOpen] = React.useState(false);
    const { movement, onDeleteMovement } = props

    return (
        <TableRow key={movement.id}>            
            <MakeCell padding='none'>
                <Link to={`/accounts/${movement.accountId}/editMovement/${movement.id}`} component={BrowserLink}>
                    {movement.description}
                </Link>
            </MakeCell>
            <MakeCell padding='none'>
                {toGermanShortDateStr(new Date(movement.date))}
            </MakeCell>
            <MakeCell align='right' padding='none'>
                {formatCents(movement.amountInCents)}
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
    return (<TableCell  size='small' {...other}>{children}</TableCell>)
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

export default connect(mapStateToProps, mapDispatchToProps)(MovementRow)