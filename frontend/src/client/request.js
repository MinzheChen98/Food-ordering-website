import axios from 'axios';

export function request(url, data) {
    const headers = {'Content-Type': 'application/json'}
    return axios({
        url,
        method: 'post',
        data,
        headers,
    });
}
