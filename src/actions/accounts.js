import { _getAccounts, _saveAccount, _deleteAccount, _updateAccount } from "../api/api";
import { createThunk } from './shared'

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
    return createThunk(
        {
            apiCall: (getState, acc) => _deleteAccount(getState().authentication, acc),
            actionSuccess: accountId => deleteAccount(parseInt(accountId)),
        },
        account
    )
}

export function createAccountAsync(account) {
    return createThunk(
        {
            apiCall: (getState, acc) => _saveAccount(getState().authentication, acc),
            actionSuccess: account => createAccount(account)
        },
        account
    )
}

export function updateAccountAsync(account) {
    return createThunk(
        {
            apiCall: (getState, acc) => _updateAccount(getState().authentication, acc),
            actionSuccess: acc => updateAccount(acc)
        },
        account
    )

}

export function loadAccountsAsync() {
    return createThunk(
        {
            apiCall: getState => _getAccounts(getState().authentication),
            actionSuccess: accounts => receiveAccounts(accounts),
            actionError: () => receiveAccounts([])
        }
    )
}
