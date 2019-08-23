export const START_LOADING = 'START_LOADING'
export const LOADING_DONE = 'LOADING_DONE'

export function startLoading() {
    return {
        type: START_LOADING,
        loading: true
    }
}

export function loadingDone() {
    return {
        type: LOADING_DONE,
        loading: false
    }
}