import { receiveAccounts } from './accounts'
import { getAccounts } from '../api/api';
import { startLoading, loadingDone } from './loading';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(startLoading())
        return getAccounts()
        .then( accounts => {
            dispatch(receiveAccounts(accounts))
            dispatch(loadingDone())
        })
    }
}