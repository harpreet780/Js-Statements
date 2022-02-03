import React from 'react';
const Break = () => {
    const day =new Date('2021-12-21').toLocaleDateString('en-us', {weekday :'long'})
    return (
        <div>
            <p>{day}</p>
        </div>
    );
}

export default Break;