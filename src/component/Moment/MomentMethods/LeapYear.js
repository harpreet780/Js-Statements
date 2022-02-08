import React, { useState, useEffect } from 'react';
import moment from 'moment'
const LeapYear = () => {
    const [selected, setSelected] = useState({
        date: ""
    });
    const [Year, setYear] = useState(false);

    const Hanldedate = (e) => {
        setSelected({ ...selected, [e.target.name]: e.target.value });
    }
    const submitDate = (e) => {
        e.preventDefault();
        if (selected.date) {
            setYear(moment(selected.date).isLeapYear());
        }
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
                    Leap Year
                </button>
            </div>
            <p className="dayText">
                {Year ? "It is a Leap year" : "It is not a Leap year"}
            </p>
        </div>
    );
}

export default LeapYear;