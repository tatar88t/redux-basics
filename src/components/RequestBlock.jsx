import Axios from 'axios';
import React from 'react'

import {connect} from 'react-redux';

const Requestblock_ = (props) => {
    function onClick() {
        props.loadData();
        console.log(props, 'PROPS')
        
    }

    return (
        <>
            <button onClick = {onClick}>
                FETCH REQUEST
            </button>
            <div>
                there will be API RESPONSE
                {props.response}
            </div>
        </>
    )
}

const mapStateToProps = (store) => {
    const {response} = store.response;
    return {
        response: response
    }
}

const fetchData = (data) => ({
    type: 'SHOW_RESPONSE',
    payload: data
})

const loadData = () => (dispatch, getState) => {
    Axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        dispatch(fetchData(res.data.id))
        console.log(res.data.id, 'RES_ID')
    })
}



const mapDispatchToProps = () => (dispatch) => {
    return {
        loadData: () => dispatch(loadData())
    }
}


export const Requestblock = connect(mapStateToProps, mapDispatchToProps)(Requestblock_)