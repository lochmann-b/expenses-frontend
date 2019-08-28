import { _createMovement, _deleteMovement, _updateMovement } from "../api/api"
import { createThunk } from './shared'

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
    return createThunk(
        {
            apiCall: (getState, m) => _deleteMovement(getState().authentication, m),
            actionSuccess: (_, m) => deleteMovement(m)
        },
        movement
    )

}

export function createMovementAsync(movement) {
    return createThunk(
        {
            apiCall: (getState, m) => _createMovement(getState().authentication, m),
            actionSuccess: movement => createMovement(movement)
        },
        movement
    )
}

export function updateMovementAsync(movement) {
    return createThunk(
        {
            apiCall: (getState, movement) => _updateMovement(getState().authentication, movement),
            actionSuccess: movement => updateMovement(movement)
        },
        movement
    )
}
