import { RECEIVE_ACCOUNTS, CREATE_ACCOUNT, DELETE_ACCOUNT, UPDATE_ACCOUNT } from "../actions/accounts";
import { CREATE_MOVEMENT, DELETE_MOVEMENT, UPDATE_MOVEMENT } from '../actions/movements'
import { sortMovements } from '../util'

export default function accounts(state = [], action) {
    switch (action.type) {
        case RECEIVE_ACCOUNTS:
            const accounts = [...action.accounts.sort((a, b) => a.id - b.id)]
            accounts.forEach(a => a.movements.sort(sortMovements))
            return accounts
        case CREATE_ACCOUNT:
            return [...state, action.account].sort((a, b) => a.id - b.id)
        case DELETE_ACCOUNT:
            return state.filter(a => a.id !== action.accountId)
        case UPDATE_ACCOUNT:
            return state.map(a => a.id === action.account.id ? { ...action.account } : a)
        case CREATE_MOVEMENT: {
            const accountId = action.movement.accountId
            const account = state.find(a => a.id === accountId)
            if (account) {
                const newAccount = {
                    ...account,
                    movements: [...account.movements, { ...action.movement }].sort(sortMovements)
                }
                return state.map(a => a.id === accountId ? newAccount : a)
            }
            return state;
        }
        case UPDATE_MOVEMENT: {
            const accountId = action.movement.accountId
            const account = state.find(a => a.id === accountId)
            if (account) {
                const newAccount = {
                    ...account,
                    movements: account.movements.map(m => m.id === action.movement.id ? { ...action.movement } : m)
                }
                return state.map(a => a.id === accountId ? newAccount : a)
            }
            return state;
        }
        case DELETE_MOVEMENT: {
            const accountId = action.movement.accountId
            const account = state.find(a => a.id === accountId)
            if (account) {
                const newAccount = {
                    ...account,
                    movements: account.movements.filter(m => m.id !== action.movement.id)
                }
                return state.map(a => a.id === accountId ? newAccount : a)
            }
            return state
        }
        default:
            return state;
    }

}