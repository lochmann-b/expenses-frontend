import React from 'react'
import { Dialog, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

const DeleteDialog = props => {
    const { item, onDelete, open, setOpen } = props

    return (<Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {`Really delete account ${item}?`}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={e => setOpen(false)} color="secondary" autoFocus>No</Button>
            <Button onClick={e => { setOpen(false); onDelete() }} color="primary" >Yes</Button>
        </DialogActions>
    </Dialog>)


}

export default DeleteDialog