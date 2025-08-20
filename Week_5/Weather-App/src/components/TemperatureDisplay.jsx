import React from 'react';

function TemperatureDisplay({value,unit}){
    return(
        <div className='display'>
            <h2>
                {value} degrees {unit}
            </h2>
        </div>
    );
}
export default TemperatureDisplay;