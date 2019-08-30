import { connect } from 'react-redux'
import React from 'react'
import { clearMessage } from '../actions/messages'
import Message from './Message'


const Messages = props => {
    
    const { messages, clearMessage } = props

    return (<div hidden={messages.length === 0}>
        {messages.map(m => (<Message key={m.timestamp} message={m} clearMessage={clearMessage} />))}
    </div>
    )

}


const mapDispatchToProps = dispatch => {
    return {
        clearMessage: error => dispatch(clearMessage(error))
    }
}


const mapStateToProps = state => {
    const { messages } = state
    return {
        messages
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)