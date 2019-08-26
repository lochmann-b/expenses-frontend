import { RECEIVE_ACCOUNTS, CREATE_ACCOUNT, DELETE_ACCOUNT } from "../actions/accounts";

export default function accounts(state=[], action) {
    switch(action.type){
        case RECEIVE_ACCOUNTS:
            return [...action.accounts.sort( (a, b) => a.id - b.id)]
        case  CREATE_ACCOUNT:
                return [...state, action.account].sort( (a, b) => a.id - b.id)
        case DELETE_ACCOUNT:
            return state.filter(a => a.id !== action.accountId)
        default:
            return state;
    }

}