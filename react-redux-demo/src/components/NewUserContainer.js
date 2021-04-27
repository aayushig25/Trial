import React, { useEffect } from 'react'
import { fetchUsers} from '../redux/user/userAction'
import { useSelector, useDispatch, connect } from 'react-redux'

function UsersContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    },[])
    return (
        (userData.loading) ? (
            <h2>loading</h2>
        ) : (userData.error ? (
            <h2>{userData.error}</h2>
        ) : (
            
            <div>
                <h2>User List</h2>
                <div>
                    { userData.users.map(user => (
                        <p>{user.name}</p>
                    ))
                    }
                </div>
            </div>
        ))
    )
}

function mapStateToProps(state){
    return {
        userData : state.user
    }
}

function mapDispatchToProps(dispatch){
    console.log("called")
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
