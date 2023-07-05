import React, { useState, useEffect } from 'react';
import moment from 'moment'
const Validation = () => {
  const [error, setError] = useState("");
    const [selectDate, setSelectDate]= useState({
        start_date: null,
        end_date: null
    })
    const [start_date, setStart_date] = useState(null);
    const [Days, setDays] = useState("");
    const [end_date, setEnd_date] = useState();

    const HanldeStartDate = (e) => {
        let StartTime = moment(e?.target.value).format("MM-DD-YYYY")
        setStart_date(StartTime);
    }
    const HanldeEndDate = (e) => {
        let EndTime = moment(e?.target.value).format("MM-DD-YYYY")
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


    return (
        <div className="dateWrapper">
            <div className="dateSelect">
                <input
                    className="dateField"
                    type='date'
                    value={selectDate.start_date}
                    onChange={(e) => {
                        setSelectDate(e?.target.value)
                        HanldeStartDate(e)
                        setDays("");
                    }}
                    name="date" />
                <input
                    className="dateField"
                    type='date'
                    value={selectDate.end_date}
                    onChange={(e) => {
                        setSelectDate(e?.target.value)
                        HanldeEndDate(e)
                        setDays("");
                    }}
                    name="Date" />
                <button
                    className="submitBtn"
                    onClick={submitTime}
                    disabled={disable}
                    style={{cursor: disable && "not-allowed"}}
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
