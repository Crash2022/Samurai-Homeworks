import React, {ChangeEvent, useState} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC, InitialStateThemeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

// const themes = ['dark', 'red', 'some']; // для способа useState

function HW12() {

    // способ через useState
    /*//const theme = 'some'; // useSelector

    const [value, onChangeOption] = useState(themes[2]);
    const theme = value;

    // useDispatch, onChangeCallback

    const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
    }*/

    /*-----------------------------------------------------------------*/

    // способ через Redux
    const themeColor = useSelector<AppStoreType, InitialStateThemeType>(state => state.theme);

    const dispatch = useDispatch();

    const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.currentTarget.value);
        dispatch(changeThemeAC(event.currentTarget.value));
    }

    return (
        <div className={s[themeColor.value]}>
            <hr/>
            <span className={s[themeColor.value + '-text']}>
                homeworks 12
            </span>

            <SuperRadio
                name={'themes'}
                options={themeColor.themes}
                value={themeColor.value} // положение кнопки
                onChange={onChangeCallback} // само действие
                //onChangeOption={onChangeOption} // отклик на смену кнопки
            />

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;