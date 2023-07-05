import React, { useState, useEffect } from 'react';
import moment from 'moment'
const Validation = () => {
    const [error, setError] = useState();
    const [start_date, setStart_date] = useState();
    const [end_date, setEnd_date] = useState();
    const [Days, setDays] = useState();
    const HanldeStartDate = (e) => {
        let StartTime = moment(e.target.value).format("MM-DD-YYYY")
        setStart_date(StartTime);
    }
    const HanldeEndDate = (e) => {
        let EndTime = moment(e.target.value).format("MM-DD-YYYY")
        setEnd_date(EndTime);
    }
    const submitTime = (e) => {
        e.preventDefault();
        if (start_date && end_date && moment(start_date).isAfter(end_date)) {
            setError("*End date should be greater than start date*");
            setDays("");
        }
        else {
            const duration = moment.duration(moment(end_date).diff(start_date));
            let diff = duration.asDays();
            setDays(diff);
            setStart_date("");
            setEnd_date("");
            setError("");
        }
    }
    const disable = !start_date || !end_date;
    // const disable = start_date && end_date ? moment(start_date).isAfter(end_date) : true;
    return (
        <div className="dateWrapper">
            <div className="dateSelect">
                <input
                    className="dateField"
                    type='date'
                    value={start_date}
                    onChange={(e) => {
                        setDays("");
                        setStart_date(e.target.value)
                    }}
                    name="date" />
                <input
                    className="dateField"
                    type='date'
                    value={end_date}
                    onChange={(e) => {
                        setDays("");
                        setEnd_date(e.target.value)
                    }}
                    name="Date" />
                <button
                    className="submitBtn"
                    onClick={submitTime}
                    disabled={disable}
                >
                    Caculate
                </button>
            </div>
            <p className="dayText">{error}</p>
            {!error && Days ?
                <p className="dayText">
                    <p>{Days} days</p>
                </p>
                : null}
        </div>
    );
}

export default Validation;
