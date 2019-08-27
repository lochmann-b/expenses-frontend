import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatCents } from '../util'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { TableRow, TableCell, Link, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import { deleteAccountAsync } from '../actions/accounts'
import DeleteDialog from './DeleteDialog'


const AccountRow = props => {

    const [open, setOpen] = React.useState(false);
    const { account, onDeleteAccount, history } = props

    return (
        <TableRow key={account.id}>
            <TableCell>
                {account.id}
            </TableCell>
            <TableCell>
                <Link component={RouterLink} to={`/accounts/${account.id}`}>{account.name}</Link>
            </TableCell>
            <TableCell>
                {account.startDate}
            </TableCell>
            <TableCell>
                {formatCents(account.startingBalanceInCents)}
            </TableCell>
            <TableCell>
                {formatCents(account.movements.filter(m => new Date(m.date) >= new Date(account.startDate)).reduce((accumulator, m) => -m.amountInCents + accumulator, account.startingBalanceInCents))}
            </TableCell>
            <TableCell>
                <IconButton color='primary' onClick={e => history.push(`/editAccount/${account.id}`)} ><EditIcon /></IconButton>
            </TableCell>
            <TableCell>
                <IconButton color='primary' onClick={e => setOpen(true)}><DeleteIcon /></IconButton>
                <DeleteDialog
                    open={open}
                    message={`Really delete Account ${account.name}?`}
                    onDelete={() => onDeleteAccount(account.id)}
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
        onDeleteAccount: (accountId) => dispatch(deleteAccountAsync(accountId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountRow))