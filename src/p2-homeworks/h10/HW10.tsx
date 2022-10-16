import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitialStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    //const loading = false;

    //const [timerId, setTimerId] = useState<number>(0);

    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, InitialStateType>( state => state.loading);

    const setLoading = () => {
        // dispatch
        console.log('loading...');
        dispatch(loadingAC(true));
        // setTimeout
        const loadingTimer: number = +setInterval(() => {

        }, 3000);
        //clearInterval(loadingTimer);
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div>
                        <img src={'https://media.tenor.com/6gHLhmwO87sAAAAi/gg.gif'}
                             alt="loader" width={'150px'} height={'150px'}
                        />
                    </div>
                ) : (
                    <div style={{height: '155px'}}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10