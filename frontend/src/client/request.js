import axios from 'axios';

export function request(url, data) {
    const baseURL = 'https://foodie.aarusharora.me/api/';
    const headers = {'Content-Type': 'application/json'}
    return axios({
        url,
        method: 'post',
        data,
        headers,
        baseURL,
    });
}
