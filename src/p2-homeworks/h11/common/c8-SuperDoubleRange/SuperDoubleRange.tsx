import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    //onChangeRange?: (value: [number, number]) => void

    //value?: [number, number]
    //min, max, step, disable, ...

    //min: number
    //max: number
    //step: number
    //disable: boolean
    //multiple: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChange, onChangeRange,
        //value,
        // min, max, step, disable, ...
        //min, max, step, //disable,
        className,
        //multiple,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    // сделать самому, можно подключать библиотеки

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность
        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps}
            />
        </>
    )
}

export default SuperDoubleRange