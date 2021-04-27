import React from 'react'
import { buyIceCream } from '../redux/index'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
           <h2>Number of IceCream - {props.numOfIceCream}</h2>
           <button onClick={props.buyIceCream}>click</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
      numOfIceCream : state.iceCream.numOfIceCream
    }
}
  
function mapDispatchToProps(dispatch){
    return {
      buyIceCream : () => dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)

