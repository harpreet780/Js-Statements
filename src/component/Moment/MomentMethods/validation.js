import React, { useState,useEffect } from 'react';
import moment from 'moment'
const Validation = () => {
    const [error, setError] = useState()
    const [start_date, setStart_date] = useState();
    const HanldeStartDate = (e) => {
        let StartTime = moment(e.target.value).format("MM-DD-YYYY")
        setStart_date(StartTime);
    }
    const [end_date, setEnd_date] = useState();
    const HanldeEndDate = (e) => {
        let EndTime = moment(e.target.value).format("MM-DD-YYYY")
        setStart_date(EndTime);
    }
    const submitTime = (e) => {
        e.preventDefault();
        if (start_date && end_date && moment(start_date).isAfter(end_date)) {
            setError("End date should be greater than start date");
        }
        else {
           
        }
    }
    useEffect(()=>{

    },[])
    const disable = start_date && end_date ? moment(start_date).isAfter(end_date) : true;
    console.log(start_date, end_date,"date");
    
    return (
        <div className="dateWrapper">
            <div className="dateSelect">
                <input
                    className="dateField"
                    type='date'
                    value={start_date}
                    onChange={(e) => setStart_date(e.target.value)}
                    name="date" />
                <input
                    className="dateField"
                    type='date'
                    value={end_date}
                    onChange={(e) => setEnd_date(e.target.value)}
                    name="Date" />
                <button
                    className="submitBtn"
                    onClick={submitTime}
                    // disabled={disable}
                >
                    Submit
                  {/* {start_date && end_date? "Submit" : "Submit calculate"}   */}
                </button>
            </div>
            <p className="dayText">{error}</p>
        </div>
    );
}

export default Validation;