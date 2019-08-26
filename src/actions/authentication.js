import { startLoading, loadingDone } from './loading'
import { getToken, getAccounts } from '../api/api'
import { receiveAccounts } from './accounts';

export const RECEIVE_TOKEN = 'RECEIVE_TOKEN'
export const LOGOUT = 'LOGOUT'

export function receiveToken(token) {
    return {
        type: RECEIVE_TOKEN,
        token
    }
}

export function logout(){
    return {
        type:LOGOUT,        
    }
}

export function authenticate(user, password) {
    return (dispatch) => {
        dispatch(startLoading())
        return getToken(user, password)
            .then(token => {
                dispatch(receiveToken(token))
                getAccounts(token).then(accounts => {
                    dispatch(receiveAccounts(accounts))
                    dispatch(loadingDone())
                }).catch(error => {
                    console.log(error)
                    dispatch(receiveAccounts([]))
                    dispatch(loadingDone())
                })
            }).catch(error => {
                console.log(error)
                dispatch(receiveAccounts([]))
                dispatch(loadingDone())
            })
    }
}