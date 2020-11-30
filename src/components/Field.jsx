import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

const Field_ = (props) => {
    console.log(props.store, 'STORE')
   const [fieldValue, setFieldValue] = React.useState(''); 

   console.log(props, 'PROPS')
const onInput = (e) => {

    setFieldValue(e.target.value)
}

    return (
        <>
            <input type="text" id='field' onChange={(e) => onInput(e)} defaultValue={props.firstName}/>
            <label htmlFor="field"></label>
            <div>{fieldValue}</div>
            <button onClick = {() => props.addUser(fieldValue)}>
                SUBMIT
            </button>
        </>
    )
}

const mapStateToProps = (store) => {
    const {firstName, lastName} = store.newPerson
    console.log(store.newPerson)
    return {
        firstName: firstName,
        lastName: lastName
    } 
}

const addNewUser = (value) => {
    return{
        type: 'ADD_USER',
        payload: value
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        //Можно написать так:
        // addUser: (value) => dispatch(addNewUser(value))
        //А можно через байнд экшн криейтор
        addUser: bindActionCreators(addNewUser, dispatch)

    }
}

export const Field = connect(mapStateToProps, mapDispatchToProps)(Field_)