import React from 'react'
import classes from './AlternativeMessage.module.css'

type MessagePropsType = {
    avatar: string,
    message: string,
    name: string,
    time: string
}

function AlternativeMessage(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img src={props.avatar}></img>
            </div>
            <div className={classes.info}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.text_message}>
                    <div className={classes.text}>
                        {props.message}
                    </div>
                    <div className={classes.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
