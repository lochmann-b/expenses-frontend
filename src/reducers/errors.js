import { RAISE_ERROR, CLEAR_ERRORS, CLEAR_ERROR } from '../actions/errors'
import { START_LOADING } from '../actions/loading';

export default function accounts(state = [], action) {
    switch (action.type) {
        case RAISE_ERROR:
            return [...state, action.error].sort((a, b) => b.timestamp - a.timestamp)
        case START_LOADING:
            return []            
        case CLEAR_ERRORS:
            return []
        case CLEAR_ERROR:
            return state.filter(e => e.timestamp !== action.error.timestamp)
        default:
            return state
    }
}
