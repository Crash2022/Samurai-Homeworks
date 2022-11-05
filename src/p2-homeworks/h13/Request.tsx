import React, {useState} from "react";
import s from "../h13/HW13.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI} from "./RequestAPI";

function Request() {

    const [data, setData] = useState<any>(null);

    const getRequest = () => {
        RequestAPI.getAuth()
            .then(response => setData(response))
            .catch (error) {
            console.log({...error});
            //console.log(error.response ? error.response.data.errorText : error.message);
        }
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
                <SuperCheckbox/>
            </div>
            <div>{data}</div>
        </div>
    );
}

export default Request;