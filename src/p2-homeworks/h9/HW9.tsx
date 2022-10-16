import React from 'react'
import Clock from './Clock'
import AlternativeClock from "./AlternativeClock";

function HW9() {
    return (
        <div>
            <hr/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <span>Здесь закомментировано MomentLibrary, но из-за ДЗ 10 я скрыл его</span>
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9