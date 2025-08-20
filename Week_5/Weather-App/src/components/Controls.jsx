import React from 'react';

function Control({onIncrease,onDecrease,onConvert}){
    return(

        <div>
            <button onClick={onIncrease} className='increaseBtn'>
                +
            </button>
            <button onClick={onDecrease} className='decreaseBtn'>
                -
            </button>
            <button onClick={onConvert} className='ConvertBtn'>
                Convert
            </button>
        </div>
    );
}

export default Control;