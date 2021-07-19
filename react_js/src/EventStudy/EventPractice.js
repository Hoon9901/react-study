import React, { useReducer, useState} from 'react';

function reducer(state, action) {
    return{
        ...state,
        [action.name] : action.value
    };
}

const EventPractice = () => {
    const [state, dispatch] = useReducer(reducer, {
        message : '',
        username : ''
    });
    const { message, username } = state;

    const handleChange = (e) => {
        dispatch(e.target);
    };

    const handleClick = () => {
        alert(username+ ': ' + message);
        dispatch({
            message : '',
            username : ''
        });
    };

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleClick();
        }
    }

    return(
        <div>
            <h1>Event Practice</h1>
            <input
                type="text"
                name="username"
                placeholder="User name"
                value={username}
                onChange={handleChange}
            />
            <input
                type="text"
                name="message"
                placeholder="type something"
                value={message}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default EventPractice;