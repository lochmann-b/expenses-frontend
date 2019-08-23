import { RECEIVE_TOKEN } from "../actions/authentication";

export default function authentication(state = '', action) {
    switch (action.type) {
        case RECEIVE_TOKEN:
            return action.token              
        default:
            return state
    }
}