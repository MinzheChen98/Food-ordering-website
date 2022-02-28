import axios from 'axios';

export function request(url, data) {
    const baseUrl = 'https://foodie.aarusharora.me/';
    const headers = {'Content-Type': 'application/json'}
    return axios({
        baseUrl,
        url,
        method: 'post',
        data,
        headers,
    });
}
