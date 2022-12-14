import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    //console.log('HW09');

    const stop = () => {
        // stop
        console.log('stop');
        clearInterval(timerId);
    }
    const start = () => {
        // start
        console.log('start');
        stop();
        const id: number = window.setInterval(() => {
            //setDate &&
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        // show
        setShow(true);
    }
    const onMouseLeave = () => {
        // close
        setShow(false);
    }

    const stringTime = date.toLocaleTimeString(); // fix with date
    //const stringTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); // fix with date
    const stringDate = date.toLocaleDateString(); // fix with date

    return (
        <div style={{height: '100px', marginLeft: '10px'}}>
            <div style={{height: '50px'}}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default Clock