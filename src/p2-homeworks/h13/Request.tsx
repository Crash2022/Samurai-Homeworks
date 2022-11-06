import React, {ChangeEvent, useState} from "react";
import s from "../h13/HW13.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI} from "./RequestAPI";

function Request() {

    //const [data, setData] = useState<any>(null);
    const [checked, setChecked] = useState<boolean>(false)
    //console.log(checked);

    // const getRequest = () => {
    //     RequestAPI.getAuth()
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error))
    // }

    const sendRequest = () => {
        RequestAPI.postCheckbox(checked)
            .then(response => console.log(response))
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked);
    }

    return (
        <div className={s.request}>
            <div>
                <span>Request Component</span>
            </div>
            <div>
                {/*<SuperButton onClick={getRequest}>*/}
                {/*    Get Request*/}
                {/*</SuperButton>*/}
                <SuperButton onClick={sendRequest}>
                    Send Request
                </SuperButton>
                <SuperCheckbox
                    checked={checked}
                    onChange={changeStatus}
                />
            </div>
        </div>
    );
}

export default Request;