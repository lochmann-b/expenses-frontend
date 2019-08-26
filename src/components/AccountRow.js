import React from 'react'
import { connect } from 'react-redux'
import { formatCents } from '../util'
import DeleteIcon from '@material-ui/icons/Delete'
import { Dialog, DialogContent, DialogContentText, DialogActions, TableRow, TableCell, Link, Button, IconButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import { deleteAccountAsync } from '../actions/accounts'


const AccountRow = props => {

    const [open, setOpen] = React.useState(false);
    const { account, token, onDeleteAccount } = props

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
                {formatCents(account.movements.reduce((accumulator, m) => -m.amountInCents + accumulator, account.startingBalanceInCents))}
            </TableCell>
            <TableCell>
                <IconButton color='primary' onClick={e => setOpen(true)}><DeleteIcon /></IconButton>
                <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {`Really delete account ${account.name}?`}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={e => setOpen(false)} color="secondary" autoFocus>No</Button>
                        <Button onClick={e => { setOpen(false); onDeleteAccount(token, account.id) }} color="primary" >Yes</Button>
                    </DialogActions>
                </Dialog>

            </TableCell>
        </TableRow>)
}

const mapStateToProps = state => {
    return {
        token: state.authentication
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteAccount: (token, accountId) => dispatch(deleteAccountAsync(token, accountId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountRow)