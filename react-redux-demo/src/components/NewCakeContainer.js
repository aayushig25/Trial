import React, {useState} from 'react'
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [num, setNum] = useState(1)
    return (
        <div>
           <h2>Number of Cakes - {props.numOfCakes}</h2>
           <input type="text" onChange={e => setNum(e.target.value)} value={num}></input>

           <button onClick={() => props.buyCake(num)}>buy {num} cakes</button>

           {// <button onClick={props.buyCake}>buy {num} cakes</button>  if no payload was there }
           }

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
      buyCake : (num) => dispatch(buyCake(num))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
