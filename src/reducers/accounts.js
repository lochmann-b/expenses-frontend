import { RECEIVE_ACCOUNTS } from "../actions/accounts";

export default function accounts(state=[], action) {
    switch(action.type){
        case RECEIVE_ACCOUNTS:
            return [...action.accounts.sort( (a, b) => a.id - b.id)]
        default:
            return state;
    }

}