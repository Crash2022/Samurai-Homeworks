import React, {useEffect, useState} from 'react'
import moment, {MomentInput} from "moment";

function AlternativeClock() {

    console.log('HW09 MomentLibrary');

    const [date, setDate] = useState<MomentInput>(moment());

    useEffect(()=> {
        setInterval(()=> {
            setDate(moment());
        }, 1000)
    },[])

    const currentTime = moment().format('hh:mm:ss');

    return (
        <div style={{marginLeft: '10px'}}>
            <h4>Moment Library Test</h4>
            <div>Для проверки можно открыть консоль</div>
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