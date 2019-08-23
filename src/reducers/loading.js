import { LOADING_DONE, START_LOADING } from "../actions/loading";

export default function loading(state = false, action){
    switch(action.type){
        case LOADING_DONE:
            return false
        case START_LOADING:
            return true
        default:
            return state        
    }
}