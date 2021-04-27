import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({
    user : userReducer,
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

export default rootReducer