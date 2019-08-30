export const RAISE_MESSAGE = 'RAISE_MESSAGE'
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export function raiseError(error){
    return {
        type: RAISE_MESSAGE,
        message: {
            message: error.message, 
            timestamp: new Date().getTime(),
            type: 'error'
        },        
    }
}

export function raiseSuccess(message){
    return {
        type: RAISE_MESSAGE,
        message: {
            message, 
            timestamp: new Date().getTime(),
            type: 'success'
        }
    }
}

export function clearMessages(){
    return {
        type: CLEAR_MESSAGES
    }
}

export function clearMessage(message){
    return {
        type: CLEAR_MESSAGE,
        message
    }
}