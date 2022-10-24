import React, {useEffect, useState} from 'react'
import moment, {MomentInput} from "moment";
import 'moment/locale/ru'; // для определения локации(языка)
// require("moment/min/locales.min"); *для испорта всех языков

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

    //moment.locale('ru'); //*при импорте всех языков
    const currentTime = moment().format('LTS');

    return (
        <div style={{marginLeft: '10px'}}>
            <h4>Moment Library Test</h4>
            <div>
                {moment().format('LL')}
            </div>
            <div>
                {currentTime}
            </div>
        </div>
    )
}

export default AlternativeClock;