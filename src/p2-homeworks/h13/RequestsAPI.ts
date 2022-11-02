import axios from 'axios'

export const API = 'https://neko-cafe-back.herokuapp.com/auth/test';

export const RequestsAPI = {
    postData(success: boolean) {
        return axios.post(API, {success})
    }
}




