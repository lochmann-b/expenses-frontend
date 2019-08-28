import { combineReducers } from 'redux'
import authentication from './authentication'
import loading from './loading'
import accounts from './accounts'
import errors from './errors'

export default combineReducers({loading, authentication, accounts, errors})