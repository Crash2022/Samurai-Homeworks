import React, {ChangeEvent, useState} from "react";
import s from "../h13/HW13.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI} from "./RequestAPI";

function Request() {

    const [data, setData] = useState<any>(null);
    const [checked, setChecked] = useState<boolean>(false)

    const getRequest = () => {
        RequestAPI.getAuth()
            .then(response => setData(response))
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    const postRequest = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked);
        RequestAPI.postCheckbox(checked)
            .then(response => console.log(response.body))
            .catch(error => console.log(error))
    }

    return (
        <div className={s.request}>
            <div>
                <span>Request Component</span>
            </div>
            <div>
                <SuperButton onClick={getRequest}>
                    Request
                </SuperButton>
                <SuperCheckbox
                    checked={checked}
                    onChange={postRequest}
                />
            </div>
            <div>
                {data}
            </div>
        </div>
    );
}

export default Request;