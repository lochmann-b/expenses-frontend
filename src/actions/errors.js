export const RAISE_ERROR = 'RAISE_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export function raiseError(error){
    return {
        type: RAISE_ERROR,
        error: {
            message: error.message, 
            timestamp: new Date().getTime()
        },
        
    }
}

export function clearErrors(){
    return {
        type: CLEAR_ERRORS
    }
}

export function clearError(error){
    return {
        type: CLEAR_ERROR,
        error
    }
}