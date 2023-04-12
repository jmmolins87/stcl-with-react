import React, { useState } from "react";
// import 'wc-button';

const WrapButton = ( props ) => {
    const [text, setText] = useState( props.text );

    const clickListener = () => {
        let _text = 'Texto cambiado';
        setText(_text);
    }

    return (
        <wc-button text={ text } onClick={ clickListener }></wc-button>
    )
}

export default WrapButton;