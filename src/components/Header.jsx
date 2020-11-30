import React from 'react';
import {connect} from 'react-redux';

export const Header_ = (props) => {
    function onClick() {
        props.changeName('Bill');
        console.log(props, 'HEADER PROPS')
    }
    return (
        <div>
            <button onClick={onClick}>
                CHANGE NAME
            </button>
            <button>
                CHANGE SURNAME
            </button>
        </div>
    );
};

const changeFirstName = firstName => ({
    type: 'CHANGE_FIRST_NAME',
    payload: firstName,
});

const mdtp = dispatch => {
    return {
        changeName: (str) => dispatch(changeFirstName(str)),
    };
}

export const Header = connect(null, mdtp)(Header_);
