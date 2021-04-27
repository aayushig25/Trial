import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAIL
} from './userType'

function fetchUserRequest(){
    return {
        type: FETCH_USERS_REQUEST
    }
}

function fetchUserSuccess(users){
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

function fetchUserFail(error){
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

// function fetchUsers(){
    
//     return ((dispatch) => {
//         dispatch(fetchUserRequest)
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(res => {
//             dispatch(fetchUserSuccess(res.data))
//         }).catch(err => {
//             dispatch(fetchUserFail(err))
//         })
//     })
// }

function fetchUsers(){
    
    return ((dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch( {
                type: FETCH_USERS_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: FETCH_USERS_FAIL,
                payload: err
            })
        })
    })
}

export {fetchUserFail, fetchUserRequest, fetchUserSuccess, fetchUsers}