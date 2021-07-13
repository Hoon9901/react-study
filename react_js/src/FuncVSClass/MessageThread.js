import React, { useEffect, useRef } from 'react';

function MessageThread(){
    // state 고정
    const [message, setMsg] = React.useState(''); // 기본값 빈 문자
    
    // 최신값을 쫓아간다.
    const latestMessage = useRef('');
    useEffect(() => {
        latestMessage.current = message;
    });

    const showMessage = () => {
        alert('You said : ' + latestMessage.current);
    };

    const handleSendClick = () => {
        setTimeout(showMessage, 3000);
    };

    const handleMessageChange = (e) => {
        setMsg(e.target.value);
    };

    return(
        <>
            <input value = {message} onChange ={handleMessageChange} />
            <button onClick ={handleSendClick}>Send</button>
        </>
    );
}

export default MessageThread;