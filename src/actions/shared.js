import { startLoading, loadingDone } from './loading';
import { raiseError } from './messages';

export function createThunk({ apiCall, actionSuccess, actionError }, payload) {
    return (dispatch, getState) => {
        dispatch(startLoading())
        apiCall(getState, payload)
            .then(res => dispatch(actionSuccess(res, payload)))
            .then(dispatch(loadingDone()))
            .catch(error => {
                actionError && dispatch(actionError(error))
                dispatch(raiseError(error))
                dispatch(loadingDone())
            })
    }
}