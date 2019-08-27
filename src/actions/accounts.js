import { startLoading, loadingDone } from "./loading";
import { getAccounts, saveAccount, _deleteAccount, _updateAccount } from "../api/api";

export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS'
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT'
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'


export function deleteAccount(accountId) {
    return {
        type: DELETE_ACCOUNT,
        accountId
    }
}

export function receiveAccounts(accounts) {
    return {
        type: RECEIVE_ACCOUNTS,
        accounts
    }
}

export function createAccount(account) {
    return {
        type: CREATE_ACCOUNT,
        account
    }
}

export function updateAccount(account) {
    return {
        type: UPDATE_ACCOUNT,
        account
    }
}

export function deleteAccountAsync(account) {
    return (dispatch, getState) => {
        dispatch(startLoading())
        try {
            const res = _deleteAccount(getState().authentication, account)
            if (!(res instanceof Error)) {
                dispatch(deleteAccount(account))
            }
            dispatch(loadingDone())
        } catch (e) {
            dispatch(loadingDone())
        }
    }
}

export function createAccountAsync(account) {
    return (dispatch, getState) => {
        dispatch(startLoading())
        saveAccount(getState().authentication, account)
            .then(account => dispatch(createAccount(account)))
            .then(dispatch(loadingDone()))
            .catch(e => {
                dispatch(loadingDone())
            })

    }
}

export function updateAccountAsync(account) {
    return (dispatch, getState) => {
        dispatch(startLoading())
        _updateAccount(getState().authentication, account)
            .then(
                account => dispatch(updateAccount(account)),
                error => {
                    console.log(`Error while updating account ${account.id}`, error)
                    dispatch(loadingDone())
                }
            )
            .then(dispatch(loadingDone()))
    }
}

export function loadAccounts() {
    return (dispatch, getState) => {
        dispatch(startLoading())
        getAccounts(getState().authentication)
            .then(accounts => dispatch(receiveAccounts(accounts)))
            .then(dispatch(loadingDone()))
            .catch(e => {
                dispatch(receiveAccounts([]))
                dispatch(loadingDone())

            })
    }
}