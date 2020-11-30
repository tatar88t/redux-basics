import React from 'react'
import {connect} from 'react-redux'

function Counter_(props) {
    const onClick = () => props.counterAdd();
    
    return (
   
        <>
            <button onClick = {onClick}>
                PLUS
            </button>
            <div>
                RESULT: {props.counter}
            </div>
        </>
    )
}



const mapStateToProps = (store) => {
    
    const counter = store.counter
    console.log(counter, "COUNTER")
    return{
        counter: counter
    }
}

const counterPlus = () => ({
    type: 'PLUS',
});

const mapDispatchToProps = dispatch => {
    return {
        counterAdd: () => dispatch(counterPlus())
    }
}

export const Counter = connect(mapStateToProps, mapDispatchToProps)(Counter_);