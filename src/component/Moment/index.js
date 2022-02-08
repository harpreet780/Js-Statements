import React from 'react';
import DayGet from './MomentMethods/getDay';
import LeapYear from './MomentMethods/LeapYear';
import Validation from './MomentMethods/validation';

const Index =()=> {
    return (
        <div>
            {/* <DayGet/> */}
            <Validation/>
            <LeapYear/>
        </div>
    );
}

export default Index;