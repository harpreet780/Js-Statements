import React, { useState } from 'react';
import moment from 'moment'
const DayGet = () => {
    const [selected, setSelected] = useState({
        date: ""
    });
    const day = moment(selected.date).format("dddd")
    const [Day, setDay] = useState(false);
    const Hanldedate = (e) => {
        setSelected({ ...selected, [e.target.name]: e.target.value });
    }
    const submitDate = (e) => {
        e.preventDefault();
        setDay(true);
    }
    return (
        <div className="dateWrapper">
            <div className="dateSelect">
                <input
                    className="dateField"
                    type='date'
                    format="mm/dd/yyyy"
                    value={selected.date}
                    onChange={(e) => Hanldedate(e)}
                    name="date" />
                <button
                    className="submitBtn"
                    onClick={submitDate}
                >
                    Moment
                </button>
            </div>
            
            {Day ?
                <p className="dayText">{day}</p>
                : null}
        </div>
    );
}

export default DayGet;