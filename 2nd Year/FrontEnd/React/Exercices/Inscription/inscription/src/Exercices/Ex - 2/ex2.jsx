import { useState } from 'react';

function FTextArea(props) {
    const [message, setMessage] = useState(props.value);

    const handlerChange = (event) => {
        setMessage(event.target.value);
    };

    const handlerFocus = () => {
        setMessage("");
    };

    return (
        <>
            message: {message}
            <textarea
                cols={props.cols}
                rows={props.rows}
                value={message}
                onFocus={handlerFocus}
                onChange={handlerChange}
            />
        </>
    );
}

export default FTextArea;