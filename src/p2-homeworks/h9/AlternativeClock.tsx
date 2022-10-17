import React, {useEffect, useState} from 'react'
import moment, {MomentInput} from "moment";

function AlternativeClock() {

    console.log('HW09 MomentLibrary');

    const [date, setDate] = useState<MomentInput>(moment());

    useEffect(() => {
        const altClock: number = window.setInterval(() => {
            setDate(moment());
        }, 1000)

        return () => {
            clearInterval(altClock);
        }
    }, [])

    const currentTime = moment().format('hh:mm:ss');

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