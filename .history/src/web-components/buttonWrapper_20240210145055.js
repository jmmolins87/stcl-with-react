import React, { useState } from 'react';
// ! import 'wc-button'; Descomentar en caso de querer llamar el componente de node_modules

const ButtonWrapper = ( props ) => {

    const [ text, setText ] = useState( props.text );
    const clickListener = () => {
        let _text = 'Texto cambiado'
        setText( _text );
    }

    return ( 
        <div>
            <wc-button 
                text={ text }
                onClick={ clickListener }>
            </wc-button>
        </div>
    ) 
}


export default ButtonWrapper;