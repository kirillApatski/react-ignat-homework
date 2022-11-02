import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./RequestsAPI";
import isLoading from './assets/gif/tenor.gif'

const Request = () => {
    const [checked, setChecked] = useState(false)
    const [responseData, setResponseData] = useState('')
    const [loading, setLoading] = useState(false)

    const onChangeChecked = () => {
        setChecked(!checked)
    }
    const onClickHandler = () => {
        setLoading(true)
        RequestsAPI.postData(checked)
            .then(res => setResponseData(res.data.errorText))
            .catch(error => setResponseData(error.response ? error.response.data.errorText : error.message))
            .finally(() => setLoading(false))
    }
    const style = {
        display: 'inline-block',
        width: '150px'
    }
    return (
        <div>
            <SuperButton onClick={onClickHandler} disabled={loading}>Click me</SuperButton>
            <SuperCheckbox onChange={onChangeChecked}/>
            <div>{!loading ? responseData : <img style={style} src={isLoading} alt="loading"/>}</div>
        </div>
    );
};

export default Request;