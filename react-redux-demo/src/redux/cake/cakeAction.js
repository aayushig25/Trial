import { BUY_CAKE } from './cakeTypes'

function buyCake(num = 1){
    return {
        type : BUY_CAKE,
        payload : num
    }
}

export default buyCake