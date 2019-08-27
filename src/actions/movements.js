import { startLoading, loadingDone } from "./loading";
import { _createMovement, _deleteMovement, _updateMovement } from "../api/api";

export const RECEIVE_MOVEMENT = 'RECEIVE_MOVEMENT'
export const CREATE_MOVEMENT = 'CREATE_MOVEMENT'
export const DELETE_MOVEMENT = 'DELETE_MOVEMENT'
export const UPDATE_MOVEMENT = 'UPDATE_MOVEMENT'


export function deleteMovement(movement) {
    return {
        type: DELETE_MOVEMENT,
        movement
    }
}

export function createMovement(movement) {
    return {
        type: CREATE_MOVEMENT,
        movement
    }
}

export function updateMovement(movement) {
    return {
        type: UPDATE_MOVEMENT,
        movement
    }
}

export function deleteMovementAsync(movement) {
    return (dispatch, getState) => {
        dispatch(startLoading())
        try {
            const res = _deleteMovement(getState().authentication, movement)
            if (!(res instanceof Error)) {
                dispatch(deleteMovement(movement))
            }
            dispatch(loadingDone())
        } catch (e) {
            dispatch(loadingDone())
        }
    }
}

export function createMovementAsync(movement) {
    return (dispatch, getState) => {
        dispatch(startLoading())
        _createMovement(getState().authentication, movement)
            .then(movement => dispatch(createMovement(movement)))
            .then(dispatch(loadingDone()))
            .catch(e => {
                dispatch(loadingDone())
            })

    }
}

export function updateMovementAsync(movement) {
    return (dispatch, getState) => {
        dispatch(startLoading())
        _updateMovement(getState().authentication, movement)
            .then(
                movement => dispatch(updateMovement(movement)),
                error => {
                    console.log(`Error while updating movement ${movement.id}`, error)
                    dispatch(loadingDone())
                }
            )
            .then(dispatch(loadingDone()))
    }
}