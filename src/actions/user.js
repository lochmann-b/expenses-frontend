import { createThunk } from './shared'
import { _signup } from '../api/api'
import { raiseSuccess } from './messages'

export const SIGNUP = "SIGNUP"

export function signedUp(user) {
    return {
        type: SIGNUP,
        user
    }
}

export function signUpAsync(user) {
    return createThunk(
        {
            apiCall: (getState, u) => _signup(getState().authentication, u),
            actionSuccess: u => raiseSuccess(`User ${u.login} created`),
        }
        , user)
}