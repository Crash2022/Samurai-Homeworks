import React, {useState} from 'react'
import moment, {MomentInput} from "moment";

function AlternativeClock() {

    const [date, setDate] = useState<MomentInput>(moment());

    setInterval(()=> {
        setDate(moment());
    }, 1000)

    const currentTime = moment().format('h:mm:ss');

    return (
        <div style={{marginLeft: '10px'}}>
            <h4>Moment Library Test</h4>
            <div>
                {moment().format('DD.MM.YYYY')}
            </div>
            <div>
                {currentTime}
            </div>
        </div>
    )
}

export default AlternativeClock;