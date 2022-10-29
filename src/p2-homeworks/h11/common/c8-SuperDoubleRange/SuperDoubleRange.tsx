import React from 'react'
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setValue1: (value: number) => void
    setValue2: (value: number) => void
    // min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, setValue2 ,setValue1
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, newValue: number | number[]) => {
        if(Array.isArray(newValue)){
            setValue1(newValue[0])
            setValue2(newValue[1])
        }
    };


    return (
        <>
            <Box sx={{ width: 300 }}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
