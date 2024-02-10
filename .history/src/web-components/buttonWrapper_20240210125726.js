import React, { useState } from 'react';

const ButtonWrapper = ( props ) => {

    const [ text, setText ] = useState('Click me');

    return ( 
        <div>
            <wc-button text={ props.text }></wc-button>
        </div>
    ) 
}


export default ButtonWrapper;