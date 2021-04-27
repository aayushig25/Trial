import React from 'react'
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
           <h2>Number of Cakes - {props.numOfCakes}</h2>
           <button onClick={props.buyCake}>click</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
      numOfCakes : state.cake.numOfCakes
    }
}
  
function mapDispatchToProps(dispatch){
    return {
      buyCake : () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
