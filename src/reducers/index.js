import { combineReducers } from 'redux'
import authentication from './authentication'
import loading from './loading'
import accounts from './accounts'
import messages from './messages'

export default combineReducers({loading, authentication, accounts, messages})