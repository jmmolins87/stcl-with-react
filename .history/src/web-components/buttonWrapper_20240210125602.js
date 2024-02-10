import React, { useState } from 'react';

const ButtonWrapper = () => {

    const [ text, setText ] = useState('Click me');

    return ( 
        <div>
            <wc-button text={ text }></wc-button>
        </div>
    ) 
}


export default ButtonWrapper;