import { RECEIVE_TOKEN, LOGOUT } from "../actions/authentication";

export default function authentication(state = '', action) {
    switch (action.type) {
        case RECEIVE_TOKEN:
            return action.token              
        case LOGOUT:
            return ''
        default:
            return state
    }
}