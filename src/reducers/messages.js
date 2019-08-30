import { RAISE_MESSAGE, CLEAR_MESSAGE, CLEAR_MESSAGES } from '../actions/messages'
import { START_LOADING } from '../actions/loading';

export default function accounts(state = [], action) {
    switch (action.type) {
        case RAISE_MESSAGE:
            return [...state, action.message].sort((a, b) => b.timestamp - a.timestamp)
        case START_LOADING:
            return []            
        case CLEAR_MESSAGES:
            return []
        case CLEAR_MESSAGE:
            return state.filter(e => e.timestamp !== action.message.timestamp)
        default:
            return state
    }
}
