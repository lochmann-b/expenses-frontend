import { startLoading, loadingDone } from "./loading";
import { getAccounts } from "../api/api";

export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS'
export const SAVE_ACCOUNT = 'SAVE_ACCOUNT'


export function receiveAccounts(accounts){
    return {
        type: RECEIVE_ACCOUNTS,
        accounts
    }
}

export function loadAccounts(authentication){
    return dispatch => {
        dispatch(startLoading())
        getAccounts(authentication)
            .then(accounts => dispatch(receiveAccounts(accounts)))
            .then(dispatch(loadingDone))
            .catch(e => {
                dispatch(loadingDone())
                dispatch(receiveAccounts([]))                
            })
    }
}