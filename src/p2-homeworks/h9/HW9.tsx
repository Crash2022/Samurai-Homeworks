import React from 'react'
import Clock from './Clock'
import AlternativeClock from "./AlternativeClock";

function HW9() {

    const show = true;

    return (
        <div>
            <hr/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {
                show ? <AlternativeClock/> : ''
            }
            <hr/>
        </div>
    )
}

export default HW9