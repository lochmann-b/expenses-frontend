import { startLoading, loadingDone } from "./loading";
import { getAccounts, saveAccount } from "../api/api";

export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS'
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'


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

export function createAccountAsync(token, account) {
    return dispatch => {
        dispatch(startLoading())
        saveAccount(token, account)
            .then(account => dispatch(createAccount(account)))
            .then(dispatch(loadingDone()))
            .catch(e => {
                dispatch(loadingDone())
            })

    }
}

export function loadAccounts(authentication) {
    return dispatch => {
        dispatch(startLoading())
        getAccounts(authentication)
            .then(accounts => dispatch(receiveAccounts(accounts)))
            .then(dispatch(loadingDone()))
            .catch(e => {
                dispatch(receiveAccounts([]))
                dispatch(loadingDone())

            })
    }
}