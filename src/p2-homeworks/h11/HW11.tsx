import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeRangeValue = (value: number) => {
        setValue1(value);
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span style={{display: 'inline-block', width:'30px'}}>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeRangeValue}
                />
            </div>

            <div>
                <span style={{display: 'inline-block', width:'30px'}}>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    value={value1}
                    //onChangeRange={({min, max}: {min: number, max: number}) => {}}
                    onChangeRange={onChangeRangeValue}
                />
                <span style={{display: 'inline-block', width:'20px', marginLeft: '5px'}}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11